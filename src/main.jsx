import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BackgroundProvider } from './utils/background.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundProvider>
    <App />
    </BackgroundProvider>
  </React.StrictMode>
);
