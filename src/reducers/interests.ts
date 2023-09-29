import INTERESTS from '../data/interests';

const initialState = {
  ...INTERESTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function select(state) {
  return state.interests;
}

export function getInterests(state) {
  return select(state);
}

export default reducer;
