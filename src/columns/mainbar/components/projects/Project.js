import React, { Component } from 'react';

import './style.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <div className="content">
          <p className="period">{this.props.period}</p>
          <p className="role">{this.props.role}</p>
          <p className="name">{this.props.name}</p>
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
