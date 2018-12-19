import React, { Component } from 'react';

import './style.scss';

export default class Tools extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="tools">
        <p className="title">Tools</p>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>Eclipse</td>
                <td>Xcode</td>
              </tr>
              <tr>
                <td>Virtual Studio</td>
                <td>Git</td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td>GitLab</td>
              </tr>
              <tr>
                <td>JIRA</td>
                <td>SourceTree</td>
              </tr>
              <tr>
                <td>Heroku</td>
                <td>phpMyAdmin</td>
              </tr>
              <tr>
                <td>Dbeaver</td>
                <td>Figma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
