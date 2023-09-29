import SETTINGS from "../data/settings";

const initialState = {
  ...SETTINGS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function select(state) {
  return state.settings;
}

export function getSettings(state) {
  return select(state);
}

export default reducer;
