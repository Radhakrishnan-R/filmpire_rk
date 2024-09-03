import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import App from "./components/App";

const app = createRoot(document.getElementById("root"));
const theme = createTheme({});

app.render(<>
<ThemeProvider theme={theme}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</ThemeProvider>

    
</>);