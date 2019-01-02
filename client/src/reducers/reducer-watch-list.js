import { ADD_MOVIE } from '../actions/types';

export default function(state = [], action) {
  console.log(action)

  switch (action.type) {
    case ADD_MOVIE:

      // TODO: ensure no duplicates
      const dupe = state.filter((movie) => {
        return movie.id === action.payload.id
      });

      console.log(dupe)

      return [...state, action.payload]

      // if (dupe.length === 0) {
      //   return [...state, action.payload];
      // } else {
      //   return [...state];
      // }
    default:
      return state;
  }
}
