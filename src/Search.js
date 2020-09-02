import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Common/Button';
import { Input } from './Common/Input';

const StyledForm = styled.form`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 #d2d9e5;
  padding: 16px 16px;
  margin: 1rem .5rem;
  font-family: inherit;
  display: flex;

  @media (min-width: 576px) {
    width: 500px;
    margin: 1rem auto;
  }
`;

/** Search bar for searching jobs or companies.
 *  Results are live with debounce effect
 */
function Search({ doSearch, query, setQuery, page }) {

  const handleChange = evt => {
    setQuery(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    doSearch(query);
  }

  return (
    <StyledForm onSubmit={handleSubmit} >
      <Input
        type="search"
        placeholder={`Search ${page}`}
        name="search"
        value={query}
        onChange={handleChange}
      />
      <Button margin="0 0 0 16px">Search!</Button>
    </StyledForm>
  )
}

export default Search;