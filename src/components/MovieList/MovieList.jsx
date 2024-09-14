import React from 'react';
import {Grid2} from "@mui/material";

import useStyles from "./style";
import { Movie } from '../Index';

const MovieList = ({movies, noOfMovies}) => {
    const classes = useStyles();
  return (
    <Grid2 container className={classes.moviesContainer} >
        {movies.results.slice(0, noOfMovies).map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
    
  )
}

export default MovieList;