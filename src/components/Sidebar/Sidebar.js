import React, { Component } from 'react';

import './Sidebar.css';
import Bookmark from './icons/bookmark.svg';
import ShareSvg from './icons/share.svg';
import GitHubSvg from './icons/github.svg';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__icons">
          <a className="sidebar__link" href="https://github.com/crftd/rechner">
            <img className="sidebar__icon" src={GitHubSvg} alt="GitHub icon"/>
          </a>
          <img className="sidebar__icon" src={ShareSvg} alt="Share icon"/>
          <img className="sidebar__icon" src={Bookmark} alt="Bookmark icon"/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
