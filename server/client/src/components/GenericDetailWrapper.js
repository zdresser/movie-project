import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
import * as actions from '../actions';
import { connect } from "react-redux";

class GenericDetailWrapper extends Component {
  render() {
    return (
      <MovieDetails 
        // type will be 'movie' or 'watchList'
        type={this.props.type}
        movie={this.props.movie} 
        authenticated={this.props.authenticated} 
        addMovieToWatchList={this.props.addMovieToWatchList}
        watch_list_ids={this.props.watch_list_ids}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  // helper for either using 'movies' or 'watch_list'
  const defineMovieState = (state, ownProps) => {
    switch (ownProps.type) {
      case 'movie':
        return { movies: state.movies.items }
      case 'watchList':
        return { movies: state.watch_list.items }
      default:
        return { movies: null }
    }
  };

  return {
    movie: defineMovieState(state, ownProps).movies[ownProps.match.params.id],
    authenticated: state.auth,
    watch_list_ids: Object.keys(state.watch_list.items)
  }
}

export default connect(
  mapStateToProps,
  actions
)(GenericDetailWrapper)