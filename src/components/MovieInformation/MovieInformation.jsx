import React, { useEffect, useState } from 'react';
import {Grid2, Rating, Box, Typography, CircularProgress, ButtonGroup, Button, Modal } from "@mui/material";
import {Language, Movie as MovieIcon, Theaters, Favorite, FavoriteBorderOutlined, Remove, PlusOne, ArrowBack} from "@mui/icons-material";
import {Link, useParams} from "react-router-dom";
import { useGetMovieInfoQuery, useGetMovieSuggestionQuery, useGetUserMoviesQuery } from '../../services/TMDB';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles";
import genresIcon from "../../assets/genres/index";
import { selectGenreOrCategoryName } from '../../features/currentGenreOrCategory';
import { Movie, MovieList, Pagination } from '../index';
import { tmdbAuth } from '../../utils/auth';

const MovieInformation = () => {
  const [page, setPage] = useState(1)
  const {id} = useParams();
  const {data, isFetching, error} = useGetMovieInfoQuery(id);
  const {data: recommandation, isFetching: fetchingRecommandation} = useGetMovieSuggestionQuery({id, page});
  const {data: favoriteMovies} = useGetUserMoviesQuery({category: "favorite"});
  const {data: watchlistMovies} = useGetUserMoviesQuery({category: "watchlist"});
  console.log(favoriteMovies);
  const classes = useStyles();

  const {user, sessionId} = useSelector((state) => state.tmdbAuth);
  console.log(user);
  const dispatch = useDispatch();
  const [trailerOpen, setTrailerOpen] = useState(false)
  console.log(data);
  console.log(recommandation);

  useEffect(() => {
    setisFavorite(!!favoriteMovies?.results?.find(movie => movie.id === data?.id));
  }, [data?.id, favoriteMovies]);

  useEffect(() => {
    setisWishlist(!!watchlistMovies?.results?.find(movie => movie.id === data?.id));
  }, [data?.id, watchlistMovies]);
  

  useEffect(() => {
    setPage(1);
  }, [id]);
  
  const [isFavorite, setisFavorite] = useState(false);
 const [isWishlist, setisWishlist] = useState(false);

 
  
  const isFavorited = async() => {
    const response = await tmdbAuth.post(`/account/${user.id}/favorite?session_id=${sessionId}`, {
      media_type: 'movie',
      media_id: id,
      favorite: !isFavorite,
      });

      setisFavorite(prev => !prev);
  }
  const isWishlisted = async () => {
    const response = await tmdbAuth.post(`/account/${user.id}/watchlist?session_id=${sessionId}`, {
      media_type: 'movie',
      media_id: id,
      watchlist: !isWishlist,
      });

      setisWishlist(prev => !prev);
  }

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
        cast.profile_path && <Grid2 key={cast.id} size={{xs:4, md:2}}>
        <Link to={`/actor/${cast.id}`} style={{textDecoration: "none"}}>
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
       <Grid2 container justifyContent="space-between" sx={{mt: 5}}>
          <ButtonGroup variant='outlined'>
            <Button target='_blank' rel='noopener noreferrer' href={data?.homepage} endIcon={<Language />} >Website</Button>
            <Button target='_blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data.imdb_id}`} endIcon={<MovieIcon />} >Imdb</Button>
            <Button onClick={() => setTrailerOpen(prev => !prev)}  >trailer</Button>
          </ButtonGroup>
          <ButtonGroup variant='outlined'>
            <Button onClick={isFavorited} endIcon={isFavorite ? <Favorite /> : <FavoriteBorderOutlined />} > 
            {isFavorite ? "Unfavorite" : "Favorite"}
            </Button>
            <Button onClick={isWishlisted} endIcon={isWishlist ? <Remove /> : <PlusOne /> }> 
            {isWishlist ? "remove" : "wishlist"}
            </Button>
            <Button endIcon={<ArrowBack />}>
            <Typography variant='subtitle2' sx={{textDecoration: "none"}} color="inherit" component={Link} to="/">Back</Typography>
            </Button>
            
          </ButtonGroup>
       </Grid2>
      </Grid2>
     
    </Grid2>
    <Box>
    <Typography variant='h4' gutterBottom align='left' sx={{mb:5}}>You May also Like</Typography>
       {fetchingRecommandation ? console.log("fetchinh") :
        <MovieList movies={recommandation} noOfMovies={12}/>
       }
    </Box>

    <Pagination page={page} setPage={setPage} totalPages={recommandation && recommandation.total_pages}/>
   <Modal
   closeAfterTransition
   open={trailerOpen}
   onClose={() => setTrailerOpen(prev => !prev)}
   className={classes.modal}
   >
    <iframe
      autoPlay
      frameBorder="0"
      title="Trailer"
      src={`https://www.youtube.com/embed/${data?.videos?.results[0].key}`}
      allow='autoplay'
      className={classes.trailer}
    />
   
   </Modal>
    

    </div>
  )
}

export default MovieInformation;