import React, { useMemo, useState } from 'react';
import Header from '../components/Header.jsx';
import CategorySidebar from '../components/CategorySidebar.jsx';
import CategorySection from '../components/CategorySection.jsx';
import Footer from '../components/Footer.jsx';
import { categories, allRepos } from '../data/repos.js';

export default function HomePage() {
  const [query, setQuery] = useState('');

  const filterFn = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return (repo) =>
      (repo.displayName || '').toLowerCase().includes(q) ||
      (repo.description || '').toLowerCase().includes(q) ||
      (repo.owner || '').toLowerCase().includes(q) ||
      (repo.name || '').toLowerCase().includes(q);
  }, [query]);

  // Determine which categories will have at least one visible repo after filter
  const visibleIds = useMemo(() => {
    if (!filterFn) return null;
    const set = new Set();
    for (const cat of categories) {
      const mainHit = (cat.repos || []).some(filterFn);
      const subHit = (cat.subcategories || []).some((s) => (s.repos || []).some(filterFn));
      if (mainHit || subHit) set.add(cat.id);
    }
    return set;
  }, [filterFn]);

  const nothingFound = filterFn && visibleIds && visibleIds.size === 0;

  // Distribute categories into two independent vertical columns:
  //   left column  = categories at even indices (0, 2, 4, …)
  //   right column = categories at odd indices  (1, 3, 5, …)
  // This guarantees the first two categories sit side-by-side at the
  // exact same top baseline, and every subsequent category flows
  // straight under the previous one in its own column with a small gap
  // (true masonry — no big empty space between rows).
  const leftColumn = categories.filter((_, i) => i % 2 === 0);
  const rightColumn = categories.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Header
        searchValue={query}
        onSearchChange={setQuery}
        totalRepos={allRepos.length}
        totalCategories={categories.length}
      />

      <section className="hero">
        <div className="hero-inner">
          <h1>
            The Ultimate <span className="hl">Open-Source</span> Directory
          </h1>
          <p>
            200+ handpicked GitHub repositories across AI, Web, Mobile, DevOps,
            Security, Data Science and more — each with a live details page powered by
            the GitHub API.
          </p>
          <div className="hero-chips">
            <span className="chip"><strong>{allRepos.length}</strong> repos</span>
            <span className="chip"><strong>{categories.length}</strong> categories</span>
            <span className="chip">Updated for <strong>2026</strong></span>
            <span className="chip">Live GitHub stats</span>
          </div>
        </div>
      </section>

      <div className="layout">
        <CategorySidebar categories={categories} visibleIds={visibleIds} />

        <main className="directory-wrap">
          {nothingFound ? (
            <div className="no-results">
              <strong>No repositories matched “{query}”.</strong>
              Try a broader keyword like <em>react</em>, <em>docker</em>, or{' '}
              <em>security</em>.
            </div>
          ) : (
            <div className="directory">
              <div className="directory-col">
                {leftColumn.map((cat) => (
                  <CategorySection key={cat.id} category={cat} filterFn={filterFn} />
                ))}
              </div>
              <div className="directory-col">
                {rightColumn.map((cat) => (
                  <CategorySection key={cat.id} category={cat} filterFn={filterFn} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
