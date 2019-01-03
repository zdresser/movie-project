import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { connect } from "react-redux";
import * as actions from '../actions';
import InfiniteScroll from 'react-infinite-scroller';
import _ from "lodash";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: true,
    };
  }

  loadItems (page) {
    if (page < this.props.totalPages || this.props.totalPages === 0) {
      this.props.fetchMovies(page)
    } else {
      this.setState({ hasMoreItems: false })
    }
  }

  render() {
    console.log(this.props)
    const movies = _.map(this.props.movies, (m) => {
      return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />
    });

    return (
      <Fragment>
        <InfiniteScroll
          loadMore={this.loadItems.bind(this)}
          pageStart={0}
          hasMore={this.state.hasMoreItems}>
          <MovieGrid>
            {movies}
          </MovieGrid>
        </InfiniteScroll>
      </Fragment>
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
