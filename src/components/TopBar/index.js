import React from 'react';

import './topbar.css';

const TopBar = ({ title }) => {
  return (
    <div className="topbar-container">
      <div className="left-menu">
        <div className="apple-red" />
        <div className="apple-yellow" />
        <div className="apple-green" />
      </div>
      <div className="title">{title}</div>
      <div className="right-menu" />
    </div>
  );
};

export default TopBar;
