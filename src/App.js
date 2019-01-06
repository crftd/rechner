import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <main className="main-wrapper">
          <Calculator/>
        </main>
        <header className="sidebar-wrapper">
          <Sidebar/>
        </header>
      </div>
    );
  }
}

export default App;
