import React from 'react';

/** Search bar for searching jobs or companies.
 *  Results are live with debounce effect
 */
function Search({ doSearch, query, setQuery }) {

  const handleChange = evt => {
    setQuery(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    doSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="search"
        placeholder="Search..."
        name="search"
        value={query}
        onChange={handleChange}
      />
      <button>Search!</button>
    </form>
  )
}

export default Search;