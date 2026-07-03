import React from 'react';

function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Search for a city"
        aria-label="City"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;
