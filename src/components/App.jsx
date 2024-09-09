import { CssBaseline } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom"; 
import useStyles from "./styles";


import {Actor, MovieInformation, Movies, ProfilePage, NavBar} from "./Index";

const App = () => {

  const classes = useStyles();


  return (

    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Routes>
        <Route path="/" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieInformation />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
    </main>
    
        
        
    </div>
  )
}

export default App;