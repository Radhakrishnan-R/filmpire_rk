import React from 'react';

import { Typography, Box } from '@mui/material';

import { Movie } from '..';

const Rating = ({title, movies}) => {

  return (
    <div>
        <Typography variant='h5' gutterBottom>{title}</Typography>
        <Box display="flex" gap="10px" >
            {movies?.results?.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
            
        </Box>
    </div>
  )
}

export default Rating;