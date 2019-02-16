import React from 'react';

import './sideMenu.css';

// Components
import TopMenu from './TopMenu';
import Menu from './Menu';

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <TopMenu />
      <Menu />
    </div>
  );
};

export default SideMenu;
