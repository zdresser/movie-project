import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Poster } from "../Movie";
import MovieDetails from "../MovieDetails";
import Overdrive from "react-overdrive";
import * as actions from '../../actions';
import { connect } from "react-redux";

class DiscoverDetail extends Component {
  render() {
    const { movie } = this.props;
    
    return (
      <MovieDetails 
        type={'movie'}
        movie={this.props.movie} 
        authenticated={this.props.authenticated} 
        addMovieToWatchList={this.props.addMovieToWatchList}
      />
    );
  }
}

function mapStateToProps({ movies, auth }, ownProps) {
  return {
    movie: movies[ownProps.match.params.id],
    authenticated: auth.authenticated,
  }
}

export default connect(
  mapStateToProps,
  actions
)(DiscoverDetail)