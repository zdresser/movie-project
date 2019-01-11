import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Poster } from "../Movie";
import MovieDetails from "../MovieDetails";
import Overdrive from "react-overdrive";
import * as actions from '../../actions';
import { connect } from "react-redux";

class WatchListDetail extends Component {
  render() {
    const { movie } = this.props;
    
    return (
      <MovieDetails
        type={'watchList'}
        movie={this.props.movie}
        authenticated={this.props.authenticated}
        addMovieToWatchList={this.props.addMovieToWatchList}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {  
  console.log(state)
  
  return {
    movie: state.watch_list[ownProps.match.params.id],
    authenticated: state.auth.authenticated,
  }
}

export default connect(
  mapStateToProps,
  actions
)(WatchListDetail)
