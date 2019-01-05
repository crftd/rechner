import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Rechner.</h1>
          <form>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button>CLEAR</button>
            <button>GO</button>
          </form>
        </main>
        <header>
          <a href="#">AddToBookMarks</a>
          <a href="#">Share</a>
          <a href="https://github.com/crftd/rechner">GitHub</a>
        </header>
      </div>
    );
  }
}

export default App;
