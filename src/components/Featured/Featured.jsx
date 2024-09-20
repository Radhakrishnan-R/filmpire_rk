import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import useStyles from "./styles";
import { Link } from 'react-router-dom';

const Featured = ({movie}) => {
    
    const classes = useStyles();
  return (
    <Box marginBottom="50px" className={classes.featuredWrapper}>
        <Card component={Link} to={`movies/${movie.id}`} sx={{borderRadius: "20px"}}>
            <CardMedia alt={movie.title} title={movie.title} image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} sx={{height: "350px",backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "20px",
        backgroundBlendMode:" overlay"}}/>
            <Box className={classes.cardContent}>
                <Typography color='#fff' variant='h4' gutterBottom>{movie?.original_title}</Typography>
            </Box>
            
        </Card>
    </Box>
  )
}

export default Featured;