import React, { Component } from 'react';

import './style.css';

export default class Education extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="education">
        <p className="title">Education</p>
        <div className="content">
          <p className="period">2015 - 2019</p>
          <p className="institution">National University of Singapore</p>
          <p className="description">Bachelor of Computing(Honours) in Computer Science</p>
          <p className="score">Cumulative Average Point: 3.93 / 5.00</p>
        </div>
      </div>
    );
  }
}
