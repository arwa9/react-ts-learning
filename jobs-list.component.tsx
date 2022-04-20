import React, { Component } from 'react';
import { JobComponent } from './job.component';
import { Job } from './model/job.interface';

type PropsType = {};
type StateType = {
  jobsList: Job[];
};

export class JobsListComponent extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.setState({
      jobsList: [],
    });
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
