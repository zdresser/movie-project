import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';
import WatchListReducer from './reducer-watch-list';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  total_pages: TotalPagesReducer,
  auth: AuthReducer,
  watch_list: WatchListReducer,
  form: formReducer
});

export default rootReducer;
