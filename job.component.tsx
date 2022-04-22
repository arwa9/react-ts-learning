import React from 'react';
import { ContractTypes, Job } from './model/job.interface';
import './job.component.scss';

type PropsType = {
  job: Job;
};

const getDaysDiff = (date: Date | string): number => {
  const d: Date = typeof date === 'string' ? new Date(date) : date;
  return Math.ceil(
    Math.abs((new Date().getTime() - d.getTime()) / (24 * 60 * 60 * 1000))
  );
};

export const JobComponent = ({ job }: PropsType) => {
  return (
    <div className="job">
      <div className="job__img-container">
        <img />
      </div>
      <div className="job__info">
        <h5 className="company-name">{job.company.name}</h5>
        {getDaysDiff(job.date) <= 2 && <span className="new-tag">NEW</span>}
        <span className="featured-tag">FEATURED</span>
        <br />
        <h3 className="title">{job.title}</h3>
        <span className="details">
          {getDaysDiff(job.date)} days ago &nbsp;·&nbsp;
          {job.contractType}
          &nbsp;·&nbsp;
          {job.location}
        </span>
      </div>
      <div className="job__tags"></div>
    </div>
  );
};
