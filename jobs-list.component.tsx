import React, { Component, MouseEvent } from 'react';
import { JobComponent } from './job.component';
import { Job } from './model/job.interface';
import * as data from './data/jobs-list.js';
import { TagsComponent } from './tags.component';
import './jobs-list.component.scss';

type PropsType = {};
type StateType = {
  jobsList: Job[];
  filterTags: string[];
};

export class JobsListComponent extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      jobsList: [],
      filterTags: [],
    };
  }

  componentDidMount() {
    this.setData();
  }

  setData(): void {
    this.setState((state) => ({
      jobsList: [...state.jobsList, ...data.JOBS_LIST],
    }));
  }

  addTag(tag: string): void {
    if (this.state.filterTags.indexOf(tag) >= 0) return;
    this.setState((state) => ({
      ...state,
      filterTags: [...state.filterTags, tag],
    }));
  }

  removeTag(tag: string): void {
    if (this.state.filterTags.indexOf(tag) < 0) return;
    this.setState((state) => ({
      ...state,
      filterTags: [...state.filterTags].filter((t) => t !== tag),
    }));
  }

  render() {
    return (
      <div className="main-div">
        <TagsComponent
          tagsList={this.state.filterTags}
          removeTag={(tag: string) => {
            this.removeTag(tag);
          }}
        />
        {this.state.jobsList
          .filter(
            (job) =>
              this.state.filterTags.length <= 0 ||
              job.tags.some((tag) => this.state.filterTags.indexOf(tag) >= 0)
          )
          .map((job) => (
            <JobComponent
              key={job.title}
              job={job}
              applyTagFilter={(tag: string) => this.addTag(tag)}
            />
          ))}
      </div>
    );
  }
}
