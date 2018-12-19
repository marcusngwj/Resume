import React, { Component } from 'react';

import './style.scss';

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="work-experience">
        <td className="period">
          <p>{this.props.period}</p>
        </td>
        <td>
          <div className="content">
            <p className="role">{this.props.role}</p>
            <p className="company">{this.props.company}</p>
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
