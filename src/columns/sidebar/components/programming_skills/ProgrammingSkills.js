import React, { Component } from 'react';

import './style.scss';

export default class ProgrammingSkills extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="programming-skills">
        <p className="title">Programming Skill Sets</p>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>Java</td>
                <td>Python</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>C</td>
              </tr>
              <tr>
                <td>Objective C</td>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td>HTML, CSS</td>
                <td>SCSS</td>
              </tr>
              <tr>
                <td>React.js</td>
                <td>PHP</td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td>MySQLi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
