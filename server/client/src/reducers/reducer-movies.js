import { FETCH_MOVIES } from '../actions/types';

import { normalize, schema } from 'normalizr';

const DEFAULT_STATE = {
  items: {},
  order: []
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      const movieSchema = new schema.Entity('movies');
      const movieListSchema = new schema.Array(movieSchema);
      const movies = { results: [ movieSchema ] };
      const normalizedMovies = normalize(action.payload, movies).entities.movies;
      const normalizedOrder = normalize(action.payload.results, movieListSchema).result

      return {
        items: {...normalizedMovies, ...state.items},
        order: [...state.order, ...normalizedOrder]
      }
    default:
      return state;
  }
}
