import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi"
import CompanyCard from "./CompanyCard";
import Search from '../Search';
import { useDebounce } from '../hooks/useDebounce';

/* Renders a list of companies.*/
function Companies() {

  const [ companies, setCompanies ] = useState(null);
  const [ query, setQuery ] = useState('');

  const debouncedSearch = useDebounce(query, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("debounced", debouncedSearch);
      search(debouncedSearch);
    }
  },[debouncedSearch]);

  const search = async search => {
    setCompanies(null);
    console.log("search", search);
    let companies = await JoblyApi.searchCompanies(search);
    console.log('companies', companies);
    setCompanies(companies);
  }

  const renderCompanyCards = () => {
    return companies.map((company, i) => (
      <CompanyCard key={i} company={company} />
    ))
  }

  // todo: custom spinner
  if (!companies) return <p>Loading...</p>;

  return (
    <div className="Companies">
      <Search doSearch={search} query={query} setQuery={setQuery} />
      <div className="Companies-list">
        <div className="Companies-card-area">
          {companies.length
            ? renderCompanyCards()
            : <p>Sorry, no results were found!</p>}
        </div>
      </div>
    </div>
  );
}

export default Companies;