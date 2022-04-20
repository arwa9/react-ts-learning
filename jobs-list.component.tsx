import React, { Component } from 'react';
import { JobComponent } from './job.component';
import { Job } from './model/job.interface';
import * as data from './data/jobs-list.js';

type PropsType = {};
type StateType = {
  jobsList: Job[];
};

export class JobsListComponent extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      jobsList: [],
    };
  }

  componentDidMount() {
    this.setData();
  }
  
  setData(): void {
    this.setState((state) => ({
      jobsList: [
        ...state.jobsList,
        ...data.JOBS_LIST
      ]
    }));
  }

  render() {
    return (
      <div>
        {this.state.jobsList.map((job) => (
          <JobComponent job={job} />
        ))}
      </div>
    );
  }
}
