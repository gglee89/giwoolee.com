import React from 'react';
import classnames from 'classnames';

import './menuItem.css';

const MenuItem = ({ name, isActive, onItemSelect }) => {
  let menuItemClasses = classnames({
    'side-menu-item': true,
    active: isActive,
  });

  return (
    <div onClick={() => onItemSelect(name)} className={menuItemClasses}>
      <div className="side-menu-item-left" />
      <div className="side-menu-item-right">{name}</div>
    </div>
  );
};

export default MenuItem;
