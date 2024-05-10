/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App.css";

declare global {
  interface Window {
    threekitPlayer: (config: unknown) => Promise<{ res: any }>;
  }
}

// window.mount(document.getElementsByClassName("threekit-root")[0])
const App = () => {
  const [count, setCount] = useState(0);
  const load = async (config: any) => {
    try {
      console.log("in try 1");
      await window.threekitPlayer(config);
      console.log("in try 2");
    } catch (e: any) {
      console.log("in catch");
      console.error(e);
      console.log(e.message);
    }
  };

  useEffect(() => {
    const config = {
      initialConfiguration: {},
      authToken: "4bbe7669-d9af-4040-b450-2778b977627e",
      assetId: "4c4e2ff0-76a5-4b8b-af85-60ed5f5bc35d",
      el: window.document.getElementById("player"),
      showAR: true,
      cache: {
        scope: "v1.0",
      },
    };

    console.log("root element", window.document.getElementById("player"));

    load(config);
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
