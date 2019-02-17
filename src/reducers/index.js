import { combineReducers } from 'redux';

// Reducers
import attribution from './attribution';
import contact from './contact';
import interests from './interests';
import menu from './menu';
import modal from './modal';
import projects from './projects';

export default combineReducers({
  attribution,
  contact,
  interests,
  menu,
  modal,
  projects,
});
