import React from 'react';

import './menuItem.css';
import icons from '../../shared/icons';

const MenuItem = ({ icon, title }) => {
  return (
    <div className="menu-item">
      <img src={icons[icon]} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default MenuItem;
