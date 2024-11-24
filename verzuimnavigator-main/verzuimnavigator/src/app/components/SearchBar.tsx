// components/SearchBar.tsx
'use client';

import { useState } from 'react';

const filters = ['Alles', 'Artikel', 'Product', 'Dienst'] as const;
type FilterType = typeof filters[number];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType | 'Filter'>('Filter');

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const selectFilter = (filter: FilterType) => {
    setSelectedFilter(filter);
    setFilterOpen(false);
  };

  return (
    <div className="flex items-center bg-white border-black p-2 rounded-full w-full z-20">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek op..."
        className="bg-white w-full px-4 py-2 rounded-full"
      />
      <div className="relative">
        <button
          className="flex items-center px-4 py-2 text-black bg-yellow rounded-full"
          onClick={toggleFilter}
        >
          {selectedFilter} <span className={`ml-2 transform ${filterOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
        </button>
        {filterOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white border border-black rounded-md">
            {filters.map((filter) => (
              <li
                key={filter}
                className="px-4 py-2 hover:bg-yellow cursor-pointer"
                onClick={() => selectFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
