import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        Built with ⚛️ React · Data curated from{' '}
        <a
          href="https://github.com/md8-habibullah/top-github-repos-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          top-github-repos-list
        </a>
        {' · '}Live stats via the{' '}
        <a href="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer">
          GitHub REST API
        </a>
      </div>
      <div className="disclaimer">
        All repositories, logos, and trademarks belong to their respective owners. This
        directory is an unofficial showcase and is not affiliated with GitHub, Inc.
      </div>
    </footer>
  );
}
