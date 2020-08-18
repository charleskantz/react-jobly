import React from "react";
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';

/** JobCard - display component for showing job details.
 *  Can apply for jobs.
 * @param {job} prop: job details
 * @param {apply} prop: handles applying to a job
 */
function JobCard({ job, apply }){

  // separate details for easier reading
  const { id, title, salary, equity, state } = job;

  // apply for job
  function handleApply() {
    apply(id);
  }

  return (
    <Card>
      <h3>{title}</h3>
      <p>Salary: ${salary}</p>
      <p>Equity: {equity * 100}%</p>
      <Button
        className={state ? "alreadyApplied" : "buttonApply"}
        disabled={state}
        onClick={handleApply}
      >
        {state ? "Applied!" : "Apply"}
      </Button>
    </Card>
  )
}

export default JobCard;