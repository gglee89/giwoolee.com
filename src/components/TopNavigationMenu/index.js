import React from 'react';

import './topNavigationMenu.css';

// Components
import MenuItem from './MenuItem';

const TopNavigationMenu = props => {
  return (
    <div className="top-navigation-container">
      <div className="navigation-menu">
        <MenuItem icon="cookie" title="General" {...props} />
        <MenuItem icon="iceCream" title="Projects" {...props} />
        <MenuItem icon="melon" title="Interests" {...props} />
        <MenuItem icon="pieceOfCake" title="Mission" {...props} />
        <MenuItem icon="sushi" title="Contact" {...props} />
      </div>
    </div>
  );
};

export default TopNavigationMenu;
