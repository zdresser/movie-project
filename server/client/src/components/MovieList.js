import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions';
import InfiniteScroll from "react-infinite-scroller";

const MovieList = () => {
  const movieOrder = useSelector(state => state.movies.order);
  const movies = useSelector(state => state.movies.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const loadItems = (page) => {
    dispatch(fetchMovies(page));
  };

  const movieComponents = movieOrder.map((id) => {
    const movie = movies[id];

    return <Movie id={movie.id} key={id} title={movie.title} img={movie.poster_path} />
  });

  return (
    <InfiniteScroll loadMore={loadItems} hasMore={true}>
      <MovieGrid>
        {movieComponents}
      </MovieGrid>
    </InfiniteScroll>   
  )
}

export default MovieList;

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;