import React, { useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from '../actions';
import _ from "lodash";

const MovieList = () => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movieComponents = _.map(movies, (m) => {
    return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />
  });

  return (
    <MovieGrid>
      {movieComponents}
    </MovieGrid>
  )
};

export default MovieList;

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;