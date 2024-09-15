import React from 'react';
import {Grid2} from "@mui/material";

import useStyles from "./style";
import { Movie } from '../index';
import { useGetMovieSuggestionQuery } from '../../services/TMDB';

const MovieList = ({movies, noOfMovies}) => {
  console.log(movies);
    const classes = useStyles();
    const movieList = movies?.results || movies?.cast ;
  return (
    <Grid2 container className={classes.moviesContainer} >
        {movieList?.slice(0, noOfMovies).map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
    
  )
}

export default MovieList;