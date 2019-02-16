import { combineReducers } from 'redux';

// Reducers
import modal from './modal';
import projects from './projects';

export default combineReducers({
  modal,
  projects,
});
