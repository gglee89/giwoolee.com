export const MENU_SELECT = 'menu/MENU_SELECT';

export function selectMenu(selectedMenu) {
  return dispatch => {
    dispatch({ type: MENU_SELECT, payload: selectedMenu });
  };
}
