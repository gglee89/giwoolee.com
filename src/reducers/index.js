import { combineReducers } from 'redux';

// Reducers
import menu from './menu';
import modal from './modal';
import projects from './projects';

export default combineReducers({
  menu,
  modal,
  projects,
});
