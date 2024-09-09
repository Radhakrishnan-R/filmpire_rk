import React from 'react';
import { Grid2, Typography, Grow, Rating, Tooltip, Link } from '@mui/material';
import useStyles from "./styles";


const Movie = ({movie, i}) => {
    const classes = useStyles();

  return (
    <Grid2 xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movieCard} >
      <Grow in timeout={(i + 1) * 250}>
        <Link to={`/movie/:${movie.id}`} className={classes.link} sx={{textDecoration: "none"}}>
          <img
          alt={movie.title} 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://fillmurray.com/200/300`}
            className={classes.image}
          />
          <Typography variant='h5' className={classes.title}>{movie.title}</Typography>
          <Tooltip title={`${movie.vote_average} / 10`}>
          <div>
          <Rating readOnly value={movie.vote_average / 2} precision={0.2} />
          </div>  
          </Tooltip>
        </Link>
        
      </Grow>
      
    </Grid2>
  )
}

export default Movie;