import React from 'react';

import './topNavigationMenu.css';

// Components
import MenuItem from './MenuItem';

const TopNavigationMenu = ({ menuItems, ...rest }) => {
  return (
    <div className="top-navigation-container">
      <div className="navigation-menu">
        {menuItems &&
          menuItems.length > 0 &&
          menuItems.map(({ icon, title }) => {
            return <MenuItem icon={icon} title={title} {...rest} />;
          })}
      </div>
    </div>
  );
};

export default TopNavigationMenu;
