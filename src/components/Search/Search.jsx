import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from "./styles";
import { selectSearchQuery } from '../../features/currentGenreOrCategory';
import { useLocation } from 'react-router-dom';

const Search = () => {

    const classes = useStyles();
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const location = useLocation();

    if(location.pathname !== "/") return null;

    const handleKeyPress = async (e) => {
        if(e.key === "Enter"){
           await dispatch(selectSearchQuery(query));
        }


    }

  return (
    <div className={classes.textfield}>
        <TextField 
            variant='standard'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={handleKeyPress}
            InputProps={{
                className: classes.input,
                startAdornment: 
                    (<InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    </div>
  )
}

export default Search;