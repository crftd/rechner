import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="sidebar__title">Zhopa</h1>
        <a className="sidebar__link" href="#1">AddToBookMarks</a>
        <a className="sidebar__link" href="#1">Share</a>
        <a className="sidebar__link" href="https://github.com/crftd/rechner">GitHub</a>
      </div>
    );
  }
}

export default Sidebar;
