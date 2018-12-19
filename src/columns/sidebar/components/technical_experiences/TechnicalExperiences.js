import React, { Component } from 'react';

import './style.scss';

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
            <tbody>
              <tr><td>iOS Development</td></tr>
              <tr><td>Android Development</td></tr>
              <tr><td>Web Programming</td></tr>
              <tr><td>Database</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
