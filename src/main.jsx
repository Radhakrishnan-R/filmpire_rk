import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import ToggleColorMode from "./utils/ToggleColorMode";
import App from "./components/App";
import store from "./app/store";
import "./index.css";

const app = createRoot(document.getElementById("root"));

app.render(<>
<Provider store={store}>
<ToggleColorMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</ToggleColorMode>
</Provider>


    
</>);