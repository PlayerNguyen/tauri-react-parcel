import { useState } from "react";
import PingButton from "./components/PingButton";
import "./styles/App.css";
import { invoke } from "@tauri-apps/api";

export default function App() {
  const [pingReturner, setPingReturner] = useState(null);
  /**
   * Handle the ping button click
   */
  const handleOnClickPingButton = async () => {
    setPingReturner(await invoke("ping", {}));
  };
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <h1>Tauri React Parcel 🚀</h1>
        <p id="sub-text">
          Change <code id="sub-text-code">./App.tsx</code> to see the different
        </p>
        <h3>
          <a href="https://tauri.app" target="_blank">
            Tauri
          </a>{" "}
          |{" "}
          <a href="https://parceljs.org" target="_blank">
            Parcel
          </a>{" "}
          |{" "}
          <a href="https://react.dev" target="_blank">
            React
          </a>
        </h3>

        {/* Ping button */}
        <PingButton onClick={handleOnClickPingButton} />

        {/* Display ping returner */}
        {pingReturner !== null && <p>Return from Rust: {pingReturner}</p>}
      </div>
    </div>
  );
}
