import React, { Component } from 'react';

import './style.css';
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
        <p className="content"><img src={phoneIcon} /><span>(+65) 9750 2493</span></p>
        <p className="content"><img src={mailIcon} /><span>marcusngwj@msn.com</span></p>
        <p className="content"><img src={githubIcon} /><span>github.com/marcusngwj</span></p>
        <p className="content"><img src={linkedInIcon} /><span>linkedin.com/in/marcusngwenjian</span></p>
      </div>
    );
  }
}
