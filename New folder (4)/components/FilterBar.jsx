import React from 'react';

function FilterBar({ categories, selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, minRating, setMinRating }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-4">
      {/* Category */}
      <select
        className="border p-2 rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Price Range */}
      <div>
        <label>Price Min</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="border p-1 w-full rounded"
        />
      </div>

      <div>
        <label>Price Max</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="border p-1 w-full rounded"
        />
      </div>

      {/* Rating */}
      <div>
        <label>Min Rating</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="border p-2 w-full rounded"
        >
          {[0, 1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r}+</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
