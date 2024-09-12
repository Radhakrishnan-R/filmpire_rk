import React from 'react';
import {Grid2, Rating, Box, Typography, CircularProgress } from "@mui/material";
import {Link, useParams} from "react-router-dom";
import { useGetMovieInfoQuery } from '../../services/TMDB';
import useStyles from "./styles";
import genresIcon from "../../assets/genres/index";

const MovieInformation = () => {
  const {id} = useParams();
  const {data, isFetching, error} = useGetMovieInfoQuery(id);
  const classes = useStyles();
  console.log(data);
  

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem"/>
      </Box>
    );
  }

  if(error){
    <Box display="flex" justifyContent="center">
      <Link to="/" >Some error you can go back and try again</Link>
    </Box>
  }

  return (
    <div>
    <Grid2 container className={classes.gridContainer}>
      <Grid2 sm={12} lg={4} align="center">
        <img 
          src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : `https://via.placeholder.com/200x300`}
          alt={data.title}
          className={classes.mainImage}
        />
      </Grid2>
      <Grid2 item="true" container lg={7} className={classes.infoContainer} direction="column">
        <Typography variant='h3' align="center" gutterBottom>{data?.title} ({data?.release_date.split("-")[0]})</Typography>
        <Typography variant='h5' align="center" gutterBottom>{data?.tagline} </Typography>
        <Grid2 className={classes.rating}>
          <Box display="flex" justifyContent="space-between" alignItems="center !">
            <Rating value={data?.vote_average/2} precision={0.2} sx={{mr: 1}}></Rating>
            <Typography variant='subtitle1' gutterBottom sx={{mr: 1}}>{data?.vote_average}/10</Typography> 
          </Box>
        <Typography  variant='h6' gutterBottom>{data?.runtime}min / {data?.spoken_languages.length > 0 ? data?.spoken_languages[0].name : ""}</Typography>
        </Grid2>
        <Grid2 className={classes.genresWrapper}>
          {data?.genres.map(({id, name}) => (
            <Link key={id} className={classes.genreLinks}>
              <img 
                alt={name}
                src={genresIcon[name.toLowerCase()]}
                className={classes.genreIcons}
              />
              <Typography variant='subtitle1'>{name}</Typography>
            </Link>
          ))}
        </Grid2>
       
      
       
      </Grid2>
    </Grid2>
    </div>
  )
}

export default MovieInformation;