import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ searchValue, onSearchChange, totalRepos, totalCategories }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">


          </span>
          <span className="tagline">· top open-source repos, by category</span>
        </Link>

        {typeof onSearchChange === 'function' && (
          <div className="search">
            <span className="icon">🔍</span>
            <input
              type="search"
              placeholder="Search 200+ repositories by name or description…"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search repositories"
            />
          </div>
        )}

        {typeof totalRepos === 'number' && (
          <div className="header-stats">
            <strong>{totalRepos}</strong> repos · <strong>{totalCategories}</strong> categories
          </div>
        )}
      </div>
    </header>
  );
}
