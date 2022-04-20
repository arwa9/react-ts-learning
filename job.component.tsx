import React from 'react';
import { Job } from './model/job.interface';

type PropsType = {
  job: Job;
}
export const JobComponent = ({ job }: PropsType) => {
  return <h1>{job.title}</h1>;
}
