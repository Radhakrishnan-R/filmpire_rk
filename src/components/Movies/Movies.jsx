import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Typography, useMediaQuery} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Featured, MovieList, Pagination } from '../index';

import useStyles from "./styles";

const Movies = () => {

  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  console.log(lg);

  const noOfMovies = lg ? 16 : 18;

  const [page, setPage] = useState(1);

  

  const {genreOrCategoryName, searchQuery} = useSelector((state) => state.currentGenreOrCategory);
  console.log(genreOrCategoryName);

  const {data, error, isFetching} = useGetMoviesQuery({genreOrCategoryName, page, searchQuery});
  const classes = useStyles();

  
  useEffect(() => {
    setPage(1)
  }, [genreOrCategoryName]);

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"/>
      </Box>
    );
  }
  if(error){
    console.log(error);
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant='h6'>Issue fetching the movies - Try again later</Typography>
      </Box>
    );
  }
  if(data.results.length < 0){
    console.log(error);
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant='h6'>Issue fetching the movies - Try again later</Typography>
      </Box>
    );
  }

  return (
    <>
    <Featured movie={data.results[0]}/>
      <MovieList movies={data} noOfMovies={noOfMovies} startAt={1}/>
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages}/>
    </>
      
  )
}

export default Movies;