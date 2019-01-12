import React, { Component } from 'react';
import Profile from './Profile';
import Formation from './Formation';
import jsonData from '../api/data.json';

class App extends Component {
  render() {
    return (
      <section className="app">
        <Profile profile={jsonData} />
        <Formation experiences={jsonData.work_experiences} education={jsonData.education} />
      </section>
    );
  }
}

export default App;