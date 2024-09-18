import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import { ExitToApp } from "@mui/icons-material";
import { useGetUserMoviesQuery } from '../../services/TMDB';
import { Rating } from '../index';


const ProfilePage = () => {
  const { user } = useSelector((state) => state.tmdbAuth);


  const {data: favoriteMovies, refetch: favoriteRefetch} = useGetUserMoviesQuery({category: "favorite"});
  const {data: watchlistMovies, refetch: watchlistRefetch} = useGetUserMoviesQuery({category: "watchlist"});

  useEffect(() => {
    favoriteRefetch();
    watchlistRefetch();
  }, [])
  

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  }
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" marginBottom="30px">
        <Typography variant='h4' gutterBottom>Profile: {user.username}</Typography>
        <Button color='inherit' onClick={logout} endIcon={<ExitToApp />}>Logout</Button>
      </Box>
      
      <Rating title="Favorite" movies={favoriteMovies} />
      <Rating title="Watchlist" movies={watchlistMovies} />
    </Box>
  )
}

export default ProfilePage;