import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { connect } from "react-redux";
import * as actions from '../actions';
import _ from "lodash";

class MovieList extends Component {  
  componentDidMount () {
    this.props.fetchMovies()
  }

  render() {
    const movies = _.map(this.props.movies, (m) => {
      return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />
    });

    return (
      <MovieGrid>
        {movies}
      </MovieGrid>
    );
  }
}

function mapStateToProps (state) {
  return { movies: state.movies, totalPages: state.total_pages }
};

export default connect(
  mapStateToProps,
  actions
)(MovieList);

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;