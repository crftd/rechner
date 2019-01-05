import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/SIdebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <main className="main-wrapper">
          <div className="calculator">
            <h1 className="calculator__title">Rechner.</h1>
            <form className="calculator__form">
              <input className="calculator__cidr-input" type="text"/>
              <input className="calculator__ip-input__half" type="text"/>
              <input className="calculator__ip-input__half" type="text"/>
              <button className="button">CLEAR</button>
              <button className="button_primary">GO</button>
            </form>
          </div>
        </main>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
