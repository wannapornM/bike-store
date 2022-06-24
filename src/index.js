import { createRoot } from "react-dom/client";

import App from "./App";

const app = document.getElementById("main-app");
const root = createRoot(app);
root.render(<App />);
