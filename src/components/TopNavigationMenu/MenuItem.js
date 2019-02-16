import React from 'react';
import classNames from 'classnames';

import './menuItem.css';
import icons from '../../shared/icons';

const MenuItem = ({ icon, title, ...rest }) => {
  const { selectedMenu, selectMenu } = rest;
  let menuItemClasses = classNames({
    'menu-item': true,
    active: title === selectedMenu,
  });

  return (
    <div onClick={() => selectMenu(title)} className={menuItemClasses}>
      <img src={icons[icon]} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default MenuItem;
