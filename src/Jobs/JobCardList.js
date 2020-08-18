import React, { useState } from "react";
import JobCard from "./JobCard";
import Pagination from "../NavRoutes/Pagination";

export const CARDS_PER_PAGE = 10;

/** JobCardList - Used by both JobList and CompanyDetail to list jobs.
 *
 * - jobs – prop: list of jobs to render
 * - apply – prop: handles applying to a job
 */
function JobCardList({ jobs, apply }) {

  const [currentPage, setCurrentPage] = useState(1);

  // pagination data
  const idxLastPost = currentPage * CARDS_PER_PAGE;
  const idxFirstPost = idxLastPost - CARDS_PER_PAGE;
  const currentPosts = jobs.slice(idxFirstPost, idxLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="JobsList">
        {currentPosts.map((job) => <JobCard key={job.id} job={job} apply={apply} />)}
        <Pagination
          cardsPerPage={CARDS_PER_PAGE}
          totalCards={jobs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default JobCardList;