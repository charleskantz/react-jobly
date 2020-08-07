import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi"
import CompanyCard from "./CompanyCard";
import Search from '../Search';

// TODO: add a loading message for slowing loading

/* Renders a list of companies.*/
function Companies() {
  const [companies, setCompanies] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});

  // Search for jobs. If no search query, then get all jobs,
  // otherwise search based on search query
  useEffect(() => {
    async function fetchCompanies(){
      let companiesData = await JoblyApi.request("companies", searchQuery);
      setCompanies(companiesData.companies);
    }
    fetchCompanies();
  },[searchQuery]);

  const renderCompanyCards = () => {
    return companies.map((company, i) => (
      <CompanyCard key={i} company={company} />
    ))
  }

  // todo: custom spinner
  if (!companies) return <p>Loading...</p>;

  return (
    <div className="Companies">
      <Search doSearch={setSearchQuery}/>
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