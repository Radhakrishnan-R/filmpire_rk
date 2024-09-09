import React from 'react';
import {Grid2} from "@mui/material";

import useStyles from "./style";
import { Movie } from '../Index';

const MovieList = ({movies}) => {
    const classes = useStyles();
  return (
    <Grid2 container className={classes.moviesContainer} >
        {movies.results.map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
    
  )
}

export default MovieList;