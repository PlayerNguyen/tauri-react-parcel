import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Index.css";

const appElement = document.getElementById("app");
if (appElement === null) {
  throw new Error(`Cannot found #app element in document`);
}

ReactDOM.createRoot(appElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
