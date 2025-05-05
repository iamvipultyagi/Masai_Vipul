import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or description..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 w-full mb-4 rounded"
    />
  );
}

export default SearchBar;
