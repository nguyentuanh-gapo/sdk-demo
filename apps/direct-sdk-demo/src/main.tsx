import React from "react";
import ReactDOM from "react-dom/client";
import { initGapoSDK, Widget } from "@gapo/sdk";
import "@gapo/sdk/style.css";

async function initializeDirectSDKDemo() {
  initGapoSDK({
    token: "my-direct-token",
    language: "es",
  });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <h1>Direct SDK Demo App</h1>
      <div
        className="p-4 bg-white shadow rounded-lg"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Widget />
      </div>
    </React.StrictMode>
  );
}

initializeDirectSDKDemo();
