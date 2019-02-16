import React from 'react';

import './topNavigationMenu.css';

// Components
import MenuItem from './MenuItem';

const TopNavigationMenu = () => {
  return (
    <div className="top-navigation-container">
      <div className="navigation-menu">
        <MenuItem icon="cookie" title="General" />
        <MenuItem icon="iceCream" title="Projects" />
        <MenuItem icon="melon" title="Interests" />
      </div>
    </div>
  );
};

export default TopNavigationMenu;
