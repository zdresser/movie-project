import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';
import { reducer as FormReducer } from 'redux-form';
import WatchListReducer from './reducer-watch-list';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  total_pages: TotalPagesReducer,
  form: FormReducer,
  auth: AuthReducer,
  watch_list: WatchListReducer
});

export default rootReducer;
