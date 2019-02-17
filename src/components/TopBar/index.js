import React from 'react';

import './topbar.css';

const TopBar = ({ title, requestFullScreen }) => {
  return (
    <div className="topbar-container">
      <div className="left-menu">
        <div className="apple-red">
          <span>X</span>
        </div>
        <div className="apple-gray" />
        <div className="apple-green" onClick={() => requestFullScreen()}>
          <span>🗖</span>
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="right-menu" />
    </div>
  );
};

export default TopBar;
