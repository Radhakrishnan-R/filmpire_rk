import React, {useEffect, useState} from 'react';
import {Box, CircularProgress} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategoryName } from '../../features/currentGenreOrCategory';
import { selectSearchQuery } from '../../features/currentGenreOrCategory';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../index';

import useStyles from "./styles";

const Movies = () => {

  const [page, setPage] = useState(1);

  const {genreOrCategoryName, searchQuery} = useSelector((state) => state.currentGenreOrCategory);
  console.log(genreOrCategoryName);

  const {data, error, isFetching} = useGetMoviesQuery({genreOrCategoryName, page, searchQuery});
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