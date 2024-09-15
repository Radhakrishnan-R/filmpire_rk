import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Sidebar } from '../index';

import useStyles from "./styles";
import Search from '../Search/Search';

const NavBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const isAuthenticated = true;
  

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
        {isMobile && <IconButton
          edge="start" 
          color='inherit'
          style={{outline: "none"}}
          onClick={() => {setMobileOpen(prevValue => (!prevValue)) }}
          className={classes.menuButton}
          >
          <Menu />
          </IconButton>}
          <IconButton color='inherit' sx={{ml: 1}} onClick={() => {}}>
          {theme.palette.mode === "dark" ? <Brightness7/> : <Brightness4/>}
          </IconButton>
          {!isMobile && <Search />}
          {!isAuthenticated ? 
          <Button color='inherit' onClick={() => {}}>
            Login &nbsp; <AccountCircle />
          </Button> : 
          <Button color='inherit' component={Link} to="/profile/:id" onClick={() => {}}>
           Movies &nbsp; <Avatar style={{width: "30px", height:"30px"}} alt='Profile-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAMFBMVEXh4eGjo6OgoKDk5OTd3d3Nzc2rq6unp6e4uLjY2NidnZ2ysrLCwsLR0dHIyMi9vb3FjeezAAAD0ElEQVR4nO2c2XaEIAxAhbCILP7/31bUztLpKLHBOKfcl7Zv9xDQkMR2XaPRaDQajUaDFgB4+nlBAFQMY58ZQ1TXFFXJWzkhhMg/rE+KW+mF2IshC96Rg+gjt9Yj4Hr7rLiK2t5dJe7QJfmb4+wpU3cJz2kh3znOnpdYTuh+DfZj2C+wmtFuOmYs9yECZ3YlhTDcQTfb4V6DbnglNw/Og2bPKamLHDOaT1LtHO+HxbRsr0sYSyUnzZHpAIHafwjdsYpJMyAkhQg8ksqXB3wKuefZmREjOWmyvIEgIC0Dx8YEVMBzyDksUSc8w/LIdLilnBbTcVgOSMuBwRI02lKfvzEhoS1Ts/xoy4i2jAwPzI84451CSgrB8VSHoovZHWlY3uOITH225MnWPyJz61RJweCOYbqfjSjLkUcSHMqSqwqDyYN5cuAZzGJyPNIXyq8+PJeeFVX4ZJdcB3wGXNnlx/IWMEEX1S8ZsvRnUoFlYnbscg1zp/rPWbu8AXqziikte7hnYKusJT135f8bgPTmiSRNulBrF9T4s1k6t0tHrtLqG6DTvREPnWdhen2BptlPoHM69N5Ya43vg3YXdJzJWso5p9bfG41Go9FoNP4pc2p+ofz8CQBQykWt04LW0Sl1pZHWScXFNf+d0/Scqa+5cHQXWFjIWW+4zbC+XM7mmdaQs2I21SnIOvjpVrZTNZhuaT5oljlhWK5jO3WNm6lYLmunik4bMXn5crXdMR2kT+dd2aCLo9kJ87vgmzGe5Bl7cchx8Txj8BpUMshIv4gOJlUteQBof3gZHxfU63oHCSJyhGhD1FdqloMKBOt405ShRtjBITvNu541ZprLh2vLIS9l42YtS6GdycTOB5ZC21JDjhUgNAn70SU9naOQ9YLw0y4YiDqUUDjgfwzZ02zNWNExQ5N9VF1Kqm8skKMueEh657UDThJySHUDPoWcYuKxqE//J0uS1/lHnB4oHSE5KGlo8kyokbTdIWvyV8qIMpIweau2NUk/m6u1NYmnoepoko9sUd/NFknqET2IxV8VFkta+js5uWYNSfILeZXreKb8U9ICyYpfTpE9N+t+XkxTKpKUb5zf2B69K5S0tacIwf25OnjOgF4qbEy8cTxpZhRUf9hTiv68AT3tDxXX5eDPnGuFLhnsp1JCDObsf2QCnTaouEthOCYdc4uv2HPaj3zTmC6UdH/kYALfZxRd7gCtjed3gkvrmb1HDqCcDt6I4bkFLeUwCOODdlf531RzMz+m0Zs8b5Axxo8psrbv3wDzmIbKfP/RaDQajUaj0fhvfAHq2CdC+yWZXAAAAABJRU5ErkJggg=='/>
          </Button>
          }
          {isMobile && <Search />}
          
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
            variant='temporary'
            anchor='right'
            open= {mobileOpen}
            onClose={() => {setMobileOpen(prevValue => (!prevValue)) }}
            ModalProps={{keepMounted: true}}
            classes={{paper: classes.drawerPaper}}
            >
            <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer 
            variant='permanent' 
            ModalProps={{keepMounted: true}}
            classes={{paper: classes.drawerPaper}}
            open
            >
            <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar;