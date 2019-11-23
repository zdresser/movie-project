import { ADD_MOVIE,  UPDATE_WATCH_LIST } from '../actions/types';
import { normalize, schema } from 'normalizr';

const DEFAULT_STATE = {
  items: {},
  watch_list_count: 0
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_MOVIE:
      if (!state[action.payload.id]) {
        return { 
          items: { ...state.items, [action.payload.id]: action.payload },
          watch_list_count: state.watch_list_count += 1
        }
      } else {
        return {
          items: {...state.items},
          watch_list_count: state.watch_list_count
        }
      }
    case UPDATE_WATCH_LIST:
      const data = { results: action.payload }

      const movie = new schema.Entity('movies')
      const mySchema = { results: [ movie ]}

      const normalizedMovies = normalize(data, mySchema).entities.movies;

      return {
        items: {...normalizedMovies},
        watch_list_count: action.payload.length
      }
    default:
      return state;
  }
}
