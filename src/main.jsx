import React from "react";
import ReactDOM from "react-dom/client";
import FontStyles from "./fontStyles";
import App from "./App";
import "./output.css"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
