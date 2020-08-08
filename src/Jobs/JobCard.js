import React from "react";
import './JobCard.css';

// details on a specific job, and button to apply for job
function JobCard({
  id,
  title,
  salary,
  equity,
  hasApplied,
  apply
}){
  // apply for job
  function handleApply(evt) {
    console.log("handle apply", id);
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

export default JobCard