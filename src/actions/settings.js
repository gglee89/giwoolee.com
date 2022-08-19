export const THEME_SELECT = "settings/THEME_SELECT";

export const selectTheme = (selectedTheme) => (dispatch) => {
  dispatch({ type: THEME_SELECT, payload: selectedTheme });
};
