import React from 'react';
import classNames from 'classnames';

import './menuItem.css';
import icons from '../../shared/icons';

import { MENU_ITEMS } from '../../section/Preferences'

// Icons BY HYUNAH KIM
import HomeIcon from '@mui/icons-material/Home';              // ABOUT ME
import AssignmentIcon from '@mui/icons-material/Assignment';  // PROJECT
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'; // INTERESTS
import SignpostIcon from '@mui/icons-material/Signpost'; // MISSION
import ContactMailIcon from '@mui/icons-material/ContactMail'; // CONTACT
import TagIcon from '@mui/icons-material/Tag'; // ATTRIBUTE
import { blue } from '@mui/material/colors';

const MenuItem = ({ icon, title, ...rest }) => {
  const { selectedMenu, selectMenu } = rest;
  let menuItemClasses = classNames({
    'menu-item': true,
    active: title === selectedMenu,
  });

  let RenderedIcon = HomeIcon
  switch (title) {
    case MENU_ITEMS.GENERAL:
      RenderedIcon = HomeIcon
      break
    case MENU_ITEMS.PROJECTS:
      RenderedIcon = AssignmentIcon
      break
    case MENU_ITEMS.INTERESTS:
      RenderedIcon = ImportantDevicesIcon
      break
    case MENU_ITEMS.MISSION:
      RenderedIcon = SignpostIcon
      break
    case MENU_ITEMS.CONTACT:
      RenderedIcon = ContactMailIcon
      break
    case MENU_ITEMS.ATTRIBUTION:
      RenderedIcon = TagIcon
      break
    default:
      RenderedIcon = HomeIcon
      break
  }

  return (
    <div onClick={() => selectMenu(title)} className={menuItemClasses}>
      {/* <img src={icons[icon]} alt={title} /> */}
      <RenderedIcon sx={{ color: blue[700] }} />
      <div>{title}</div>
    </div>
  );
};

export default MenuItem;
