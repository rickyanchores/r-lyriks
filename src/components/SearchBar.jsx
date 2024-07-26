'use client';

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar p-4 flex justify-center">
      <div className="container p-4 flex justify-center flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold">Search Lyrics</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Enter song title or artist..."
          className="p-2 border border-gray-300 rounded text-black w-full max-w-md"
        />
        <button className="btn mt-4 border-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
