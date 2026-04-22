import React from 'react';

export default function CategorySidebar({ categories, visibleIds }) {
  return (
    <aside className="sidebar" aria-label="Categories navigation">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => {
          const dimmed = visibleIds && !visibleIds.has(cat.id);
          return (
            <li key={cat.id}>
              <a href={`#${cat.id}`} style={dimmed ? { opacity: 0.35 } : undefined}>
                <span aria-hidden="true" style={{ marginRight: 6 }}>{cat.emoji}</span>
                {cat.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
