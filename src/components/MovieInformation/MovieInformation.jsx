import React from 'react';
import {Grid2, Rating, Box, Typography, CircularProgress } from "@mui/material";
import {Link, useParams} from "react-router-dom";
import { useGetMovieInfoQuery } from '../../services/TMDB';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles";
import genresIcon from "../../assets/genres/index";
import { selectGenreOrCategoryName } from '../../features/currentGenreOrCategory';

const MovieInformation = () => {
  const {id} = useParams();
  const {data, isFetching, error} = useGetMovieInfoQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
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
      <Grid2 size={{sm: 12, md: 4}} align="center">
        <img 
          src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : `https://via.placeholder.com/200x300`}
          alt={data.title}
          className={classes.mainImage}
        />
      </Grid2>
      <Grid2 size={{sm: 12, lg:7}} container className={classes.infoContainer} direction="column">
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
            <Link key={id} className={classes.genreLinks} to="/" onClick={() => dispatch(selectGenreOrCategoryName(id))}>
              <img 
                alt={name}
                src={genresIcon[name.toLowerCase()]}
                className={classes.genreIcons}
              />
              <Typography variant='subtitle1'>{name}</Typography>
            </Link>
          ))}
        </Grid2>
       <Typography variant='h5' gutterBottom sx={{mt:5}}>Overview</Typography>
       <Typography gutterBottom >{data?.overview}</Typography>
       <Typography variant='h5' gutterBottom sx={{mt:5}}>Top Cast</Typography>
       <Grid2 container className={classes.castGrid} width="100%" spacing={1}>
       {data?.credits?.cast.map(cast => (
        <Grid2 key={cast.id} size={{xs:4, md:2}}>
        <Link  onClick={() => {}} to="/profile/:id" style={{textDecoration: "none"}}>
          <img 
            alt=""
            src= {`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            className={classes.castImage}
          />
          <Typography color='textPrimary' gutterBottom>{cast.name}</Typography>
          <Typography color='textSecondary' gutterBottom>{cast.character.split("/")[0]}</Typography>
        </Link>
        </Grid2>
        
       )).slice(0,6)}
        
       </Grid2>
      
       
      </Grid2>
    </Grid2>
    </div>
  )
}

export default MovieInformation;