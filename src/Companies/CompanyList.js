import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi"
import CompanyCard from "./CompanyCard";
import Search from '../Search';
import useDebounce from '../hooks/useDebounce';
import { CARDS_PER_PAGE } from '../Jobs/JobCardList';
import Pagination from "../Nav and Routes/Pagination";

/** Companies - Renders a list of companies.
 *   - CompanyList > CompanyCard > Company
 */
function CompanyList() {

  const [companies, setCompanies] = useState(null);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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

  // pagination data
  const idxLastPost = currentPage * CARDS_PER_PAGE;
  const idxFirstPost = idxLastPost - CARDS_PER_PAGE;
  const currentPosts = companies.slice(idxFirstPost, idxLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Companies">
      <Search doSearch={search} query={query} setQuery={setQuery} />
      <div className="Companies-list">
        <div className="Companies-card-area">
          {companies.length
            ? <>
                {currentPosts.map((company, i) => <CompanyCard key={i} company={company} />)}
                  <Pagination
                  cardsPerPage={CARDS_PER_PAGE}
                  totalCards={companies.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </>
            : <p>Sorry, no results were found!</p>}
        </div>
      </div>
    </div>
  );
}

export default CompanyList;