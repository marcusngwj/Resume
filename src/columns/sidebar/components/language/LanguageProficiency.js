import React, { Component } from 'react';

import './style.css';

export default class LanguageProficiency extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="language-proficiency">
        <p className="title">Language Proficiency</p>
        <div className="content">
          <div className="language">
            <p className="text">English</p>
            <div className="proficiency">
              <span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span>
            </div>
          </div>
          <div className="language">
            <p className="text">Chinese</p>
            <div className="proficiency">
              <span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span>
            </div>
          </div>
          <div className="language">
            <p className="text">Japanese</p>
            <div className="proficiency">
              <span className="shaded"></span><span className="unshaded"></span><span className="unshaded"></span><span className="unshaded"></span><span className="unshaded"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
