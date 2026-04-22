import React from 'react';
import RepoLink from './RepoLink.jsx';

function RepoList({ repos }) {
  if (!repos || repos.length === 0) return null;
  return (
    <ul className="repo-list">
      {repos.map((repo) => (
        <li key={`${repo.owner}/${repo.name}/${repo.displayName}`}>
          <RepoLink repo={repo} />
        </li>
      ))}
    </ul>
  );
}

export default function CategorySection({ category, filterFn }) {
  const applyFilter = (repos) => (filterFn ? repos.filter(filterFn) : repos);

  const mainRepos = applyFilter(category.repos || []);
  const subcategories = (category.subcategories || [])
    .map((sub) => ({ ...sub, repos: applyFilter(sub.repos || []) }))
    .filter((sub) => sub.repos.length > 0);

  const totalCount = mainRepos.length + subcategories.reduce((a, s) => a + s.repos.length, 0);
  if (totalCount === 0) return null;

  return (
    <section className="category" id={category.id}>
      <header className="category-header">
        <h2>
          <span aria-hidden="true" style={{ marginRight: 6 }}>{category.emoji}</span>
          {category.title}
        </h2>
        <span className="count">{totalCount}</span>
      </header>

      {category.blurb && <div className="category-blurb">{category.blurb}</div>}

      <RepoList repos={mainRepos} />

      {subcategories.map((sub) => (
        <React.Fragment key={sub.id}>
          <div className="subcat" id={sub.id}>
            <h3>
              <span aria-hidden="true">{sub.emoji}</span> {sub.title}
            </h3>
          </div>
          <RepoList repos={sub.repos} />
        </React.Fragment>
      ))}
    </section>
  );
}
