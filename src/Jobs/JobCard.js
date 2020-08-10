import React from "react";

/** JobCard - display component for showing job details.
 *  Can apply for jobs.
 * @param {job} prop: job details
 * @param {apply} prop: handles applying to a job
 */
function JobCard({ job, apply }){

  // separate details for easier reading
  const { id, title, salary, equity, hasApplied } = job;

  // apply for job
  function handleApply() {
    apply(id);
  }

  return (
    <div className="JobCard" id={id}>
      <h3>{title}</h3>
      <p>Salary: ${salary}</p>
      <p>Equity: {equity * 100}%</p>
      <button
        className={hasApplied ? "alreadyApplied" : "buttonApply"}
        disabled={hasApplied}
        onClick={handleApply}
      >
        {hasApplied ? "Applied!" : "Apply"}
      </button>
    </div>
  )
}

export default JobCard;