import React, { Component } from 'react';

import './style.css';

export default class TechnicalExperiences extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="technical-experiences">
        <p className="title">Technical Experiences</p>
        <div className="content">
          <table>
            <tr>iOS Development</tr>
            <tr>Android Development</tr>
            <tr>Web Programming</tr>
            <tr>Database</tr>
          </table>
        </div>
      </div>
    );
  }
}
