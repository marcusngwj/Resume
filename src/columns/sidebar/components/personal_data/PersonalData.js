import React, { Component } from 'react';

import './style.scss';
import phoneIcon from './img/phone.png';
import mailIcon from './img/mail.png';
import githubIcon from './img/github.png';
import linkedInIcon from './img/linkedin.png';

export default class PersonalData extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="personal-data">
        <p className="title">Personal Information</p>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td><img src={phoneIcon} /></td>
                <td><span>(+65) 9750 2493</span></td>
              </tr>
              <tr>
                <td><img src={mailIcon} /></td>
                <td><span>marcusngwj@msn.com</span></td>
              </tr>
              <tr>
                <td><img src={githubIcon} /></td>
                <td><span>github.com/marcusngwj</span></td>
              </tr>
              <tr>
                <td><img src={linkedInIcon} /></td>
                <td><span>linkedin.com/in/marcusngwenjian</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
