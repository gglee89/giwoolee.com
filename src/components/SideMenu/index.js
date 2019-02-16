import React from 'react';

import './sideMenu.css';

// Components
import TopMenu from './TopMenu';
import Menu from './Menu';

const SideMenu = ({ onItemSelect, currentItem, menuItems }) => {
  return (
    <div className="side-menu-container">
      <TopMenu />
      <Menu
        onItemSelect={onItemSelect}
        currentItem={currentItem}
        menuItems={menuItems}
      />
    </div>
  );
};

export default SideMenu;
