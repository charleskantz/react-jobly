import React from "react";
import JobCard from "./JobCard";

/* Renders a list of jobs.*/

/** JobCardList - Used by both JobList and CompanyDetail to list jobs.
 *
 * @param {jobs} prop: list of jobs to render
 * @param {apply} prop: handles applying to a job
 */
function JobCardList({ jobs, apply }) {

  return (
    <div>
      <div className="JobsList">
        {jobs.map((job) => <JobCard job={job} apply={apply} />)}
      </div>
    </div>
  );
}

export default JobCardList;