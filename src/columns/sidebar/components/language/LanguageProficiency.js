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
        <p className="content">English</p>
        <p className="content">Chinese</p>
        <p className="content">Japanese</p>
      </div>
    );
  }
}
