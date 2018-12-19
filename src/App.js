import React, { Component } from 'react';
import './App.scss';

import Paper from './paper/Paper';
import MainBar from './columns/mainbar/MainBar';
import SideBar from './columns/sidebar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paper className="page1" paperSize="A4">
          <div className="page-content">
            <MainBar />
            <SideBar />
            <footer>
              This resume was created using React.js
            </footer>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
