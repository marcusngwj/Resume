import React, { Component } from 'react';

import './style.scss';

export default class Education extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="education">
        <p className="title">Education</p>
        <table>
          <tbody>
            <tr className="record">
              <td className="period"><p>2015 – 2019</p></td>
              <td>
                <div className="content">
                  <p className="institution">National University of Singapore</p>
                  <p className="description">Bachelor of Computing(Honours) in Computer Science</p>
                  <p className="score">Cumulative Average Point: 3.93</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
