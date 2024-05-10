import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const elements = document.getElementsByClassName("threekit-root");
ReactDOM.createRoot(elements[0]).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
