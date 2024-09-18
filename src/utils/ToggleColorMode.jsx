import {createTheme, ThemeProvider} from "@mui/material/styles";


import React, {createContext, useMemo, useState} from 'react';

export const ColorModeContext = createContext();

export const ToggleColorMode = ({children}) => {

    const [mode, setMode] = useState("light");

    const toggleColorMode = () => {
        console.log("color mode");
        setMode(prev => prev === "light" ? "dark" : "light");


    }
    


    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
        }
    }) , [mode])

  return (
    <ColorModeContext.Provider value={{mode, setMode, toggleColorMode}}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode;