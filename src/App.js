import React, { Component } from 'react';
import './style.css';

import MainBar from './columns/mainbar/MainBar.js';
import SideBar from './columns/sidebar/SideBar.js';

class App extends Component {
  render() {
    return (
      <div className="page">
        <MainBar />
        <SideBar />
        <footer>
        	This resume is created using React.js
        </footer>
      </div>
    );
  }
}

export default App;
