import React from 'react';
import { Link } from 'react-router-dom';

export default function RepoLink({ repo }) {
  if (!repo.owner || !repo.name) {
    // fallback: external link if we couldn't parse
    return (
      <a className="repo-link" href={repo.url} target="_blank" rel="noopener noreferrer">
        <span className="name">{repo.displayName}</span>
        <span className="desc">
          <span className="sep">—</span>
          {repo.description}
        </span>
      </a>
    );
  }
  return (
    <Link className="repo-link" to={`/repo/${repo.owner}/${repo.name}`} title={repo.description}>
      <span className="name">{repo.displayName}</span>
      <span className="desc">
        <span className="sep">—</span>
        {repo.description}
      </span>
    </Link>
  );
}
