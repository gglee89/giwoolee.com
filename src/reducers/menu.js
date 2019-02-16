import { MENU_SELECT } from '../actions/menu';

const initialState = {
  selectedMenu: 'Projects',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_SELECT:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    default:
      return state;
  }
};

function select(state) {
  return state.menu;
}

export function getSelectedMenu(state) {
  return select(state).selectedMenu;
}

export default reducer;
