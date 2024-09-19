import React, {useEffect, useState} from 'react';

import {Divider, ListItem, List, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from '@emotion/react';
import useStyles from "./sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategoryName } from '../../features/currentGenreOrCategory';


import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from "../../assets/genres/index";


const blueLogo ='https://fontmeme.com/permalink/240918/ebe3509dc8424c27db41d2ec7f077884.png';
const redLogo ='https://fontmeme.com/permalink/240918/51f73d355acf02da2b8a43187db4f6f8.png';

const Sidebar = ({setMobileOpen}) => {
  const [page, setPage] = useState(1);
    const theme = useTheme();
    const classes = useStyles();
    const {data, isFetching} = useGetGenresQuery();
    const dispatch = useDispatch();
    const {genreOrCategoryName, searchQuery} = useSelector((state) => state.currentGenreOrCategory);
    // console.log(genreIcons);
    

    const categotries = [
      {Label: "Popular", value: "popular"},
      {Label: "Top Rated", value: "top_rated"},
      {Label: "Upcoming", value: "upcoming"},
    ]
    const demoCategotries = [
      {Label: "Comedy", value: "comedy"},
      {Label: "Action", value: "action"},
      {Label: "Horror", value: "horror"},
      {Label: "Animation", value: "animation"},
    ]

  return (
    <>
        <Link to="/" className={classes.linkButton} onClick={() => setMobileOpen(false)}>
            <img alt='Filmpire' src={theme.palette.mode === "light" ? blueLogo : redLogo } className={classes.logo}/>
        </Link>
        <Divider />
        <List onClick={() => setMobileOpen(false)}>
          <ListSubheader>Catogaries</ListSubheader>
          {categotries.map(({Label, value}) => (

            <ListItem button={value.toString()} onClick={() => dispatch(selectGenreOrCategoryName(value))} key={value} to="/"  className={classes.link} component={Link}>
            <ListItemIcon>
              <img  src={genreIcons[Label.toLowerCase()]} className={classes.genreImage} width="30px"/>
            </ListItemIcon>
            <ListItemText primary={Label}/>
            </ListItem>
      
          ))}
          <Divider />
          <ListSubheader>Genres</ListSubheader>
          {isFetching ?
          (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem"/>
          </Box>
          ):
          (
            data.genres.map(({name, id}) => (
         
         <ListItem onClick={() => dispatch(selectGenreOrCategoryName(id))} key={id} to="/"  className={classes.link} component={Link} button="true" >
         <ListItemIcon>
         <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} width="30px" />
         </ListItemIcon>
           <ListItemText primary={name}/>
         </ListItem>
      
       ))
          )}
          
          
        </List>
    </>
  )
}

export default Sidebar;  