import React from 'react';
import {Grid2, Typography, Box, Button, CircularProgress} from "@mui/material";
import {ArrowBack} from "@mui/icons-material"
import {MovieList} from "../index";

import useStyles from "./styles";
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorInforQuery } from '../../services/TMDB';


const Actor = () => {

  const {id} = useParams();
  const {data, isFetching, error} = useGetActorInforQuery(id);
  console.log(data);
  const navigate = useNavigate();

  const classes = useStyles();

  if(isFetching){
    return (
      <Box display="flex" justifyContent="center" width="100%">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  const bornDate = new Date(data.birthday).toDateString();


  return (
    <div>
      <Grid2 container className={classes.actorGrid} >
        <Grid2 size={{xs: 12, sm: 7, md: 4}} >
        <img 
          alt={data.name}
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          className={classes.actorImage}
        />
        </Grid2>
        <Grid2 size={{sm: 12, md: 7}} direction="column" >
          <Typography variant='h3' gutterBottom>{data.name}</Typography>
          <Typography variant='h5' gutterBottom>Born on {bornDate}</Typography>
          <Typography gutterBottom>{data.biography}</Typography>
          <Box width="100%" display="flex" justifyContent="space-around" sx={{marginTop: "30px"}}>
          <Button variant="contained" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/name/${data.imdb_id}`} >Imdb</Button>
          <Button  startIcon={<ArrowBack />} onClick={() => navigate(-1)} >Back</Button>
          </Box>
          
        </Grid2>
      </Grid2>
      
      <Box sx={{mt: 5}}>
        <Typography variant='h3' marginBottom="30px">Movies</Typography>
        <MovieList movies={data.movie_credits} noOfMovies={12} />
      </Box>
    </div>
  )
}

export default Actor;