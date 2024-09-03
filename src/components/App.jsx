import { CssBaseline } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom"; 
import useStyles from "./styles";


import {Actor, MovieInformation, Movies, ProfilePage, NavBar} from "./Index";

const App = () => {

  const classes = useStyles();


  return (

    <div>
    <CssBaseline />
    <NavBar />
    <main className={classes.root}>
    <Routes>
        <Route path="/" element={<Actor />}/>
        <Route path="/movies/:id" element={<MovieInformation />} />
        <Route path="/actor/:id" element={<Movies />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
    </main>
    
        
        
    </div>
  )
}

export default App;