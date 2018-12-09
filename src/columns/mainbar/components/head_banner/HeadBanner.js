import React, { Component } from 'react';

import './style.css';
import avatar from './img/avatar.png';
import droppin from './img/droppin.png';


export default class HeadBanner extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="head-banner">
        <table>
          <tbody>
            <tr>
              <td className="avatar"><img src={avatar} /></td>
              <td className="content">
                <p id="fullname">Marcus Ng Wen Jian</p>
                <p className="text">Final Year NUS Computer Science Undergraduate</p>
                <p className="text">BComputing (Honours) in Computer Science</p>
                <p className="text"><img src={droppin} /><span>Singapore</span></p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <div className="description">
                  Highly motivated and hardworking individual with diverse experience.<br />
                  Adaptable and trustworthy team player with problem-solving skills.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
