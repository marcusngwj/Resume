import React, { Component } from 'react';

import HeadBanner from './components/head_banner/HeadBanner';
import Education from './components/education/Education';
import Projects from './components/projects/ProjectComponent';

export default class MainBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="mainbar">
        <HeadBanner />
        <Education />
        <Projects />
      </div>
    );
  }
}
