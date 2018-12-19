import React, { Component } from 'react';

import './style.scss';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="project">
        <td className="period">
          <p>{this.props.period}</p>
        </td>
        <td>
          <div className="content">
            <p className="role">{this.props.role}</p>
            <p className="name">{this.props.name}</p>
            <div className="description">
              <ul>
                {this.props.description.map((desc) => <li key={desc} dangerouslySetInnerHTML={{__html: desc}} />)}
              </ul>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
