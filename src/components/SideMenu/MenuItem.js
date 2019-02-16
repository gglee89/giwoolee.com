import React from 'react';

import './menuItem.css';

const MenuItem = ({ name }) => {
  return (
    <div className="side-menu-item">
      <div className="side-menu-item-left" />
      <div className="side-menu-item-right">{name}</div>
    </div>
  );
};

export default MenuItem;
