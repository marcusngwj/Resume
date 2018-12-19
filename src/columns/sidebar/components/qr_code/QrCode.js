import React, { Component } from 'react';
import './style.scss';

import qrCode from './img/qr.png';

export default class QrCode extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="qr-code-section">
        <div className="qr-code-container">
          <img src={qrCode} />
        </div>
        <div className="url-container">
          <p className="url">https://marcus-ng-wen-jian.firebaseapp.com/</p>
        </div>
      </div>
    );
  }
}
