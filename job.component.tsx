import React from 'react';
import { Job } from './model/job.interface';

type PropsType = {
  job: Job;
};
const newDate: Date = new Date();

export const JobComponent = ({ job }: PropsType) => {
  return (
    <div className="job">
      <div className="job__img-container">
        <img />
      </div>
      <div className="job__details">
        <span className="company-name">{job.company.name}</span>
        {job?.date?.getDate() <= newDate.getDate() - 2 && (
          <span className="new-tag">NEW</span>
        )}
        <span className="featured-tag">FEATURED</span>
      </div>
      <div className="job__tags"></div>
    </div>
  );
};
