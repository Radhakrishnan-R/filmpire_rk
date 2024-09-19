import React from 'react';
import {Grid2} from "@mui/material";

import useStyles from "./style";
import { Movie } from '../index';
import { useGetMovieSuggestionQuery } from '../../services/TMDB';

const MovieList = ({movies, noOfMovies, startAt}) => {
  console.log(movies, noOfMovies);
    const classes = useStyles();
    const movieList = movies?.results || movies?.cast ;
  return (
    <Grid2 container className={classes.moviesContainer} >
        {movieList?.slice(startAt, noOfMovies).map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
    
  )
}

export default MovieList;