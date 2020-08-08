import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import JobCardList from './JobCardList';
import Search from '../Search';

function JobList() {

  const [ jobs, setJobs ] = useState(null);

  useEffect(() => {
    search();
  },[]);

  const search = async search => {
    let jobs = await JoblyApi.searchJobs(search);
    setJobs(jobs);
  }

  async function apply(id) {
    console.log(id);
    let message = await JoblyApi.apply(id);
    setJobs(j => j.map(job =>
      job.id === id ? { ...job, state: message } : job
    ))
  }

  // todo: better loading style
  if (!jobs) return <h1>Loading...</h1>;

  return (
    <>
      <Search doSearch={search} />
      {jobs.length
        ? <JobCardList jobs={jobs} apply={apply} />
        : <p>Sorry, no results found.</p>
      }
    </>
  )
}

export default JobList;