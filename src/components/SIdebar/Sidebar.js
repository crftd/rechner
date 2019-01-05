import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <header className="sidebar">
        <h1 className="sidebar__title">Zhopa</h1>
        <a className="sidebar__link">AddToBookMarks</a>
        <a className="sidebar__link">Share</a>
        <a className="sidebar__link" href="https://github.com/crftd/rechner">GitHub</a>
      </header>
    );
  }
}

export default Sidebar;
