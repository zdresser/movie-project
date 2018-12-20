import { ADD_MOVIE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      } else {
        return [...state];
      }
    default:
      return state;
  }
}
