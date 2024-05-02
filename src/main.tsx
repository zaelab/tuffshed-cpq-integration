import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).mount = (el: HTMLDivElement, player: any) => {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App threekitPlayer={player} />
    </React.StrictMode>
  );
};
