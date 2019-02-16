import React from 'react';

// Components
import MenuItem from './MenuItem';

const Menu = ({ onItemSelect, menuItems }) => {
  return (
    <div className="menu">
      {menuItems &&
        menuItems.length > 0 &&
        menuItems.map(menuItem => {
          return (
            <MenuItem
              key={menuItem}
              name={menuItem}
              onItemSelect={onItemSelect}
            />
          );
        })}
    </div>
  );
};

export default Menu;
