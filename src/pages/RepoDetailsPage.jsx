import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { findRepo } from '../data/repos.js';

const fmt = (n) => {
  if (n == null) return '—';
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
  return String(n);
};

const timeAgo = (iso) => {
  if (!iso) return '—';
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  const units = [
    ['year', 365 * 24 * 3600],
    ['month', 30 * 24 * 3600],
    ['week', 7 * 24 * 3600],
    ['day', 24 * 3600],
    ['hour', 3600],
    ['minute', 60]
  ];
  for (const [name, seconds] of units) {
    const v = Math.floor(diff / seconds);
    if (v >= 1) return `${v} ${name}${v > 1 ? 's' : ''} ago`;
  }
  return 'just now';
};

const decodeBase64Utf8 = (b64) => {
  try {
    const binary = atob(b64.replace(/\s/g, ''));
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return '';
  }
};

export default function RepoDetailsPage() {
  const { owner, name } = useParams();
  const curated = findRepo(owner, name);

  const [state, setState] = useState({ loading: true, error: null, data: null, readme: null, readmeBranch: null });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, error: null, data: null, readme: null });

    const load = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
          headers: { Accept: 'application/vnd.github+json' }
        });
        if (!repoRes.ok) {
          let msg = `GitHub API returned ${repoRes.status}`;
          if (repoRes.status === 403) msg = 'GitHub API rate-limit reached. Please try again in a few minutes.';
          if (repoRes.status === 404) msg = 'This repository could not be found on GitHub.';
          throw new Error(msg);
        }
        const data = await repoRes.json();

        // README (best-effort, don't fail if unavailable)
        let readme = null;
        let readmeBranch = data.default_branch || 'main';
        try {
          const readmeRes = await fetch(`https://api.github.com/repos/${owner}/${name}/readme`, {
            headers: { Accept: 'application/vnd.github+json' }
          });
          if (readmeRes.ok) {
            const r = await readmeRes.json();
            readme = r.content ? decodeBase64Utf8(r.content) : null;
          }
        } catch {
          /* ignore */
        }

        if (!cancelled) setState({ loading: false, error: null, data, readme, readmeBranch });
      } catch (err) {
        if (!cancelled) setState({ loading: false, error: err.message, data: null, readme: null, readmeBranch: null });
      }
    };
    load();

    return () => { cancelled = true; };
  }, [owner, name]);

  const githubUrl = state.data?.html_url || curated?.url || `https://github.com/${owner}/${name}`;

  return (
    <>
      <Header />
      <main className="details-page">
        <Link to="/" className="back-link">← Back to directory</Link>

        {state.loading && (
          <div className="state">
            <div className="spinner" />
            Loading live data from GitHub for <strong>{owner}/{name}</strong>…
          </div>
        )}

        {state.error && !state.loading && (
          <div className="state error">
            <p style={{ marginTop: 0 }}>⚠️ {state.error}</p>
            <p>
              You can still{' '}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                open this repository on GitHub ↗
              </a>.
            </p>
            {curated && (
              <p style={{ color: 'var(--text-dim)' }}>
                <em>Curated description:</em> {curated.description}
              </p>
            )}
          </div>
        )}

        {state.data && !state.loading && (
          <RepoDetails
            repo={state.data}
            readme={state.readme}
            readmeBranch={state.readmeBranch}
            curated={curated}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

function RepoDetails({ repo, readme, readmeBranch, curated }) {
  const branch = readmeBranch || repo.default_branch || 'main';
  const rawBase = `https://raw.githubusercontent.com/${repo.owner?.login}/${repo.name}/${branch}/`;
  const blobBase = `https://github.com/${repo.owner?.login}/${repo.name}/blob/${branch}/`;

  // Resolve relative URLs so images and in-repo links work inside the preview.
  const resolveUrl = (url, kind) => {
    if (!url) return url;
    // Anchor / protocol / data / mailto stays as-is.
    if (/^(https?:)?\/\//i.test(url) || url.startsWith('#') || url.startsWith('data:') || url.startsWith('mailto:')) {
      return url;
    }
    const clean = url.replace(/^\.?\//, '');
    return (kind === 'img' ? rawBase : blobBase) + clean;
  };
  return (
    <>
      <div className="details-hero">
        <img
          className="avatar"
          src={repo.owner?.avatar_url}
          alt={`${repo.owner?.login} avatar`}
          loading="lazy"
        />
        <div>
          <h1>
            <span className="owner">{repo.owner?.login}</span> / {repo.name}
          </h1>
          <p className="fullname">{repo.full_name}</p>
          <p className="desc">
            {repo.description || curated?.description || 'No description provided.'}
          </p>
        </div>
        <a className="btn-gh" href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub ↗
        </a>
      </div>

      <div className="stats-grid">
        <div className="stat"><span className="v">{fmt(repo.stargazers_count)}</span><span className="l">Stars</span></div>
        <div className="stat"><span className="v">{fmt(repo.forks_count)}</span><span className="l">Forks</span></div>
        <div className="stat"><span className="v">{fmt(repo.watchers_count)}</span><span className="l">Watchers</span></div>
        <div className="stat"><span className="v">{fmt(repo.open_issues_count)}</span><span className="l">Open Issues</span></div>
        <div className="stat"><span className="v">{fmt(repo.subscribers_count ?? repo.network_count)}</span><span className="l">Subscribers</span></div>
      </div>

      <div className="meta-grid">
        <div>
          <span className="k">Primary Language</span>
          {repo.language || '—'}
        </div>
        <div>
          <span className="k">License</span>
          {repo.license?.name || 'No license specified'}
        </div>
        <div>
          <span className="k">Default Branch</span>
          {repo.default_branch || '—'}
        </div>
        <div>
          <span className="k">Size</span>
          {repo.size != null ? `${(repo.size / 1024).toFixed(1)} MB` : '—'}
        </div>
        <div>
          <span className="k">Last Pushed</span>
          {timeAgo(repo.pushed_at)}
        </div>
        <div>
          <span className="k">Created</span>
          {timeAgo(repo.created_at)}
        </div>
        {repo.homepage && (
          <div>
            <span className="k">Homepage</span>
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              {repo.homepage.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        {curated?.category && (
          <div>
            <span className="k">Directory Category</span>
            {curated.category}{curated.subcategory ? ` · ${curated.subcategory}` : ''}
          </div>
        )}
      </div>

      {Array.isArray(repo.topics) && repo.topics.length > 0 && (
        <div className="topics">
          {repo.topics.map((t) => (
            <span key={t} className="topic">#{t}</span>
          ))}
        </div>
      )}

      {readme && (
        <section className="readme">
          <div className="readme-head">
            <h2>README preview</h2>
            <a
              className="readme-link"
              href={`${repo.html_url}#readme`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full README on GitHub ↗
            </a>
          </div>
          <div className="content markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              urlTransform={(url) => resolveUrl(url, 'link')}
              components={{
                a: ({ node, href, children, ...props }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                img: ({ node, src, alt, ...props }) => (
                  <img
                    src={resolveUrl(src, 'img')}
                    alt={alt || ''}
                    loading="lazy"
                    {...props}
                  />
                )
              }}
            >
              {readme.length > 20000
                ? readme.slice(0, 20000) +
                  '\n\n---\n\n_…README truncated. [View the full README on GitHub](' +
                  repo.html_url +
                  '#readme)._'
                : readme}
            </ReactMarkdown>
          </div>
        </section>
      )}
    </>
  );
}
