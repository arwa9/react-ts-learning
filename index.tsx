import React, { Component } from 'react';
import { render } from 'react-dom';
import { JobsListComponent } from './jobs-list.component';
import './style.css';

type AppProps = {};
type AppState = {
  name: string;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <JobsListComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
