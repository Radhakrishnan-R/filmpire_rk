import React, {useEffect} from 'react';

import {Divider, ListItem, List, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from '@emotion/react';
import useStyles from "./sidebar";

const blueLogo ='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo ='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles();

    const categotries = [
      {Label: "Popular", value: "popular"},
      {Label: "Top-rated", value: "top-rated"},
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
        <Link to="/" className={classes.linkButton}>
            <img alt='Filmpire' src={theme.palette.mode === "Light" ? redLogo : blueLogo} className={classes.logo}/>
        </Link>
        <Divider />
        <List>
          <ListSubheader>Catogaries</ListSubheader>
          {categotries.map(({Label, value}) => (

            <ListItem button={value.toString()} onClick={() => {}} key={value} to="/"  className={classes.link} component={Link}>
            <ListItemIcon sx={{mr: 1}}>
              <img src={blueLogo} width={70} className={classes.genreImage}/>
            </ListItemIcon>
            <ListItemText primary={Label}/>
            </ListItem>
      
          ))}
          <Divider />
          <ListSubheader>Genres</ListSubheader>
          {demoCategotries.map(({Label, value}) => (
         
            <ListItem button={value.toString()} onClick={() => {}} key={value} to="/"  className={classes.link} component={Link}>
            <ListItemIcon sx={{mr: 1}}>
            <img src={blueLogo} width={70} className={classes.genreImage}/>
            </ListItemIcon>
              <ListItemText primary={Label}/>
            </ListItem>
         
          ))}
          
        </List>
    </>
  )
}

export default Sidebar;  