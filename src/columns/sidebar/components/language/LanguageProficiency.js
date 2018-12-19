import React, { Component } from 'react';

import './style.scss';

export default class LanguageProficiency extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="language-proficiency">
        <p className="title">Language Proficiency</p>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td className="language">English</td>
                <td><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span></td>
              </tr>
              <tr>
                <td className="language">Chinese</td>
                <td><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span><span className="shaded"></span></td>
              </tr>
              <tr>
                <td className="language">Japanese</td>
                <td><span className="shaded"></span><span className="unshaded"></span><span className="unshaded"></span><span className="unshaded"></span><span className="unshaded"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
