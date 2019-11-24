import React from 'react';

// Components
import MenuItem from './MenuItem';

const Menu = ({ onItemSelect, currentItem, menuItems }) => {
  return (
    <div className="menu">
      {menuItems &&
        menuItems.length > 0 &&
        menuItems.map(menuItem => {
          return (
            <MenuItem
              key={menuItem}
              isActive={menuItem === currentItem}
              name={menuItem}
              onItemSelect={onItemSelect}
            />
          );
        })}
    </div>
  );
};

export default Menu;
