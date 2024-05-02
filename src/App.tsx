/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App.css";

declare global {
  interface Window {
    threekitPlayer: (config: unknown) => void;
  }
}

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const config = {
      initialConfiguration: {},
      authToken: "4b31a923-4378-4185-b01e-d8f602bbfdf0",
      assetId: "4c4e2ff0-76a5-4b8b-af85-60ed5f5bc35d",
      el: document.getElementById("player"),
      showAR: true,
      cache: {
        // maxAge: 5000, //milliseconds
        scope: "v1.0",
      },
    };

    window.threekitPlayer(config);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Test React - CPQ integration</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div id="player"></div>
    </>
  );
};

export default App;
