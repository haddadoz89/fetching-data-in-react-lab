import { useState } from 'react';

const StarshipSearch = ({ onSearch, onReset, resultsCount, prevSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <section>
      <h2>Star Wars Starships</h2>
      <p className="search-meta">
        Number of results: {resultsCount}
        <br />
        {prevSearchTerm ? `Search results for "${prevSearchTerm}"` : 'Search for a starship by name.'}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        {prevSearchTerm && (
          <button type="button" onClick={onReset}>Show all starships</button>
        )}
      </form>
    </section>
  );
};

export default StarshipSearch;