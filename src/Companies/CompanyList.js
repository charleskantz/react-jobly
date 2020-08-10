import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi"
import CompanyCard from "./CompanyCard";
import Search from '../Search';
import useDebounce from '../hooks/useDebounce';

/** Companies - Renders a list of companies.
 *   - CompanyList > CompanyCard > Company
 */
function CompanyList() {

  const [companies, setCompanies] = useState(null);
  const [query, setQuery] = useState('');

  // debounce search query for automatic retrieval
  const debouncedSearch = useDebounce(query, 1000);

  useEffect(() => {
    search(debouncedSearch);
  }, [debouncedSearch]);

  const search = async search => {
    let companies = await JoblyApi.searchCompanies(search);
    setCompanies(companies);
  }

  // todo: custom spinner
  if (!companies) return <p>Loading...</p>;

  return (
    <div className="Companies">
      <Search doSearch={search} query={query} setQuery={setQuery} />
      <div className="Companies-list">
        <div className="Companies-card-area">
          {companies.length
            ? companies.map((company, i) => (<CompanyCard key={i} company={company} />))
            : <p>Sorry, no results were found!</p>}
        </div>
      </div>
    </div>
  );
}

export default CompanyList;