import "./App.css";
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Nav from "./components/Nav";
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import DiscoverList from './components/DiscoverList'
import GenericDetailWrapper from './components/GenericDetailWrapper'
import WatchList from './components/WatchList'
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import MovieDetailWithType from './components/MovieDetailWithType';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <App>
          <Switch>
            <Route exact path="/" component={DiscoverList} />
            
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            
            <Route exact path="/watch-list" component={WatchList} />

            <Route exact path="/watch-list/:id" component={
              MovieDetailWithType('watchList')(GenericDetailWrapper)
            } />
            
            <Route exact path="/:id" component={
              MovieDetailWithType('movie')(GenericDetailWrapper)
            } />
          </Switch>
        </App>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
