import ATRIBUTION from '../data/attribution';

const initialState = {
  ...ATRIBUTION,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function select(state) {
  return state.attribution;
}

export function getAttribution(state) {
  return select(state);
}

export default reducer;
