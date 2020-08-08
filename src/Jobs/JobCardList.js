import React from "react";
import JobCard from "./JobCard";

/* Renders a list of jobs.*/
function JobCardList({ jobs, apply }) {

  return (
    <div>
      <div className="JobsList">
        {jobs.map((job) => (
          <JobCard
            id={job.id}
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            hasApplied={job.state}
            apply={apply}
          />
        ))}
      </div>
    </div>
  );
}

export default JobCardList;