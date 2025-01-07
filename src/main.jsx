import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './assets/styles/main.css'
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles

createRoot(document.getElementById("root")).render(<App />);
