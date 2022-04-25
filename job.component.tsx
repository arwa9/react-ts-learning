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
  const diffDays: number = getDaysDiff(job.date);

  return (
    <div className={`job ${job.featured ? 'featured' : ''}`}>
      <div className="job__img-container">
        <img />
      </div>
      <div className="job__info">
        <h5 className="company-name">{job.company.name}</h5>
        {(diffDays <= 2) && <span className="new-tag">NEW!</span>}
        {job.featured && <span className="featured-tag">FEATURED</span>}
        <br />
        <h3 className="title">{job.title}</h3>
        <div className="details">
          <span>{diffDays}d ago</span>
          <span>{job.contractType}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="job__tags">
        {job.tags.map(tag => <span className="job-tag">{tag}</span>)}
      </div>
    </div>
  );
};
