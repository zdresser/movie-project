import { ADD_MOVIE,  UPDATE_WATCH_LIST } from '../actions/types';
import _ from 'lodash'

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case ADD_MOVIE:
      console.log([...state, action.payload])
      return [...state, action.payload]
    case UPDATE_WATCH_LIST:
      return action.payload
    default:
      return state;
  }
}
