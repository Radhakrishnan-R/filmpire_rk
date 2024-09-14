import React from 'react';
import { Grid2, Typography, Grow, Rating, Tooltip} from '@mui/material';
import {Link} from "react-router-dom";
import useStyles from "./styles";


const Movie = ({movie, i}) => {
    const classes = useStyles();

  return (
    <Grid2 size={{xs:12, sm:6, md:4, lg:3, xl:2}} className={classes.movieCard} >
      <Grow in timeout={(i + 1) * 250}>
        <Link to={`/movies/${movie.id}`} className={classes.link} sx={{textDecoration: "none"}}>
          <img
          alt={movie.title} 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://via.placeholder.com/200x300`}
            className={classes.image}
          />
          <Typography variant='h5' className={classes.title}>{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
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