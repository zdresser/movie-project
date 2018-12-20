import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { bindActionCreators } from "redux";
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

const Pages = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  margin: 0 1.6em;

  button.active {
    border: 1px solid hsl(0, 0%, 13%);
    color: hsl(0, 0%, 13%);
    background: hsl(196, 82%, 60%);
    border-radius: 4px;
    padding: 0.3em;
  }

  button.page {
    border-radius: 4px;
    border: 1px solid hsl(196, 82%, 60%);
    color: hsl(196, 82%, 60%);
    background: hsl(0, 0%, 13%);
    padding: 0.3em;
    &:hover {
      border: 1px solid hsl(0, 0%, 13%);
      color: hsl(0, 0%, 13%);
      background: hsl(196, 82%, 60%);
      cursor: pointer;
    }
  }

  li {
    font-size: 0.8em;
    list-style: none;
    margin-right: 0.5em;
    color: whitesmoke;
  }

  li:hover,
  li:active {
    color: hsl(196, 82%, 60%);
    cursor: pointer;
  }
`;

const Sorters = styled.div`
  border: 1px solid red;
  margin: 1.5em auto;
  padding: 1em;
  min-height: 50px;
  min-width: 100px;
`;
