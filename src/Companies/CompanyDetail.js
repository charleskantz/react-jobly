import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/JoblyApi"
import JobCardList from "../Jobs/JobCardList";
import AuthContext from '../AuthContext';

/** Company - Shows both company details and a list of available
 *  jobs at that company.
 */
function CompanyDetail(){

  const { handle } = useParams();
  const [ currentCompany, setCompany ] = useState(null);
  const { userInfo } = useContext(AuthContext);

  // Get list of jobs for this company from DB
  useEffect(() => {
    async function fetchCompany(){
      const { jobs } = userInfo;
      let companyData = await JoblyApi.getCompany(handle);

      // save applied job ids to a set for faster access
      const jobsAppliedTo = new Set(jobs.map(job => job.id));

      // add tag to jobs already applied to
      companyData.jobs = companyData.jobs.map(job => ({
        ...job,
        state: jobsAppliedTo.has(job.id) ? "applied" : null
      }));

      setCompany(companyData);
    }
    fetchCompany();
  },[handle, userInfo]);

  const apply = async id => {
    if (currentCompany) {
      let message = await JoblyApi.apply(id);
      setCompany(company => ({
        ...company,
        jobs: company.jobs.map(job =>
          job.id === id ? { ...job, state: message } : job
        )
      }));
    }
  }

  // todo: better loading design
  if (!currentCompany) return <h1>Loading...</h1>;

  return (
    <div className="singleCompany">
      <div>
        <h1>{currentCompany.name}</h1>
        <div>{currentCompany.description}</div>
      </div>
      <div className="jobList">
        <div className="Job-card-area">
          <JobCardList jobs={currentCompany.jobs} apply={apply} />
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail;


