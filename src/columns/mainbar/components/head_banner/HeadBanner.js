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
        <img className="avatar" src={avatar} />
        <div className="content">
          <p id="fullname">Marcus Ng Wen Jian</p>
          <p className="text">Final Year NUS Computer Science Undergraduate</p>
          <p className="text">BComputing (Honours) in Computer Science program</p>
          <p className="text"><img src={droppin} /><span>Singapore</span></p>
        </div>
        <div className="description">
          Hardworking individual with experience in Software Engineering, focusing in Mobile Development. Adaptable team player with problem-solving skills
        </div>
      </div>
    );
  }
}
