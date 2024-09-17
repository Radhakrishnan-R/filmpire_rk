import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import { ExitToApp } from "@mui/icons-material";


const ProfilePage = () => {
  const { user } = useSelector((state) => state.tmdbAuth);
  const favorite = false;

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
      {favorite ? 
      (<Box></Box>) :
      (
        <Typography variant='h6'>Add your movies to Favorite or Watchlist it to view it here!</Typography>
      )
      }
    </Box>
  )
}

export default ProfilePage;