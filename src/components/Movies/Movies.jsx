import React, {useEffect, useState} from 'react';
import {Box, CircularProgress} from "@mui/material";

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../Index';

import useStyles from "./styles";

const Movies = () => {

  const {data, error, isFetching} = useGetMoviesQuery();
  const classes = useStyles();

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"/>
      </Box>
    );
  }

  return (
      <MovieList movies={data} />
  )
}

export default Movies;