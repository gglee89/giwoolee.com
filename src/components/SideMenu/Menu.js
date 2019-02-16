import React from 'react';

// Components
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem name="Rocky App" />
      <MenuItem name="Avocado" />
      <MenuItem name="Marshall Goldsmith" />
      <MenuItem name="K-POP" />
      <MenuItem name="HDBCSI" />
    </div>
  );
};

export default Menu;
