import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const Pagination = ({page, setPage, totalPages}) => {
  function handlePrev () {
      if(page > 1){
        setPage(prev => prev - 1);
      }
  }
  function handleNext () {
      if(page < totalPages){
        setPage(prev => prev + 1);
      }
  }
  console.log(totalPages);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop="30px">
        <Button variant='contained' onClick={handlePrev}>Prev</Button>
        <Typography variant='h6' sx={{ml: 2, mr: 2}} >{page}</Typography>
        <Button variant='contained' onClick={handleNext}>Next</Button>
    </Box>
  )
}

export default Pagination;