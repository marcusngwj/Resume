import React, { Component } from 'react';

import './style.css';

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work-experience">
        <div className="content">
          <p className="period">{this.props.period}</p>
          <p className="role">{this.props.role}</p>
          <p className="company">{this.props.company}</p>
          <div className="description">
            <ul>
              {this.props.description.map((desc) => <li key={desc} dangerouslySetInnerHTML={{__html: desc}} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
