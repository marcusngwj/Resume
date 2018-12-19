import React, { Component } from 'react';
import './style.scss';

class Paper extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={"paper " + this.props.paperSize}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Paper;
