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
    <div className="SearchBar p-4 grid justify-center">
      <div className="container p-4 justify-center">
      <h1>Search Lyrics</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Enter song title or artist..."
        className="p-2 border border-gray-300 rounded"
      />
      <button className="btn ml-4 border-2 p-2" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
