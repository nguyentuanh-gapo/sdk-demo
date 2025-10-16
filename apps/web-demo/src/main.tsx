import React from "react";
import ReactDOM from "react-dom/client";
import { initGapoSDK, Widget } from "@gapo/sdk";

async function initializeWebDemo() {
  initGapoSDK({
    language: "en",
    theme: "dark",
    token: "static-web-token",
  });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 my-8">
          Web Demo Application
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          This demo showcases the SDK widget with integrated UI components.
        </p>
        <Widget />
      </div>
    </React.StrictMode>
  );
}

initializeWebDemo();
