import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import MovieDetailInner from "./MovieDetailInner";
import Overdrive from "react-overdrive";
import * as actions from '../actions';
import { connect } from "react-redux";

class WatchListDetail extends Component {
  render() {
    const { movie } = this.props;
    
    return (
      <MovieDetailInner
        type={'watchList'}
        movie={this.props.movie}
        authenticated={this.props.authenticated}
        addMovieToWatchList={this.props.addMovieToWatchList}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {  
  return {
    movie: state.watch_list[0],
    authenticated: state.auth.authenticated,
  }
}

export default connect(
  mapStateToProps,
  actions
)(WatchListDetail)
