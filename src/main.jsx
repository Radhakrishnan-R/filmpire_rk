import {createRoot} from "react-dom/client";
import App from "./components/App";

const app = createRoot(document.getElementById("root"));

app.render(<>
    <App />
</>);