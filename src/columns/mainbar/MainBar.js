import React, { Component } from 'react';

import HeadBanner from './components/head_banner/HeadBanner';

export default class MainBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="mainbar">
        <HeadBanner />

      </div>
    );
  }
}
