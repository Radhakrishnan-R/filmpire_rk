import React, {useEffect} from 'react';

import {Divider, ListItem, List, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from '@emotion/react';

const redLogo ='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo ='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();

  return (
    <>
        <Link to="/">
            <img alt='Filmpire' src={theme.palette.mode === "Light" ? blueLogo : redLogo} />
        </Link>
    </>
  )
}

export default Sidebar;  