import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { DemoSDK } from "@demo/sdk";
import "./index.css";

function DirectSDKApp() {
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [sdkOptions, setSdkOptions] = useState({
    token: "my-direct-token",
    language: "es",
    theme: "link",
    onExpiredToken: () => {
      setIsTokenExpired(true);
      console.log("Direct SDK Demo: Token Expired!");
    },
  });

  return (
    <div className=" flex flex-col p-4 bg-white shadow rounded-lg align-center">
      <h1 className="text-4xl font-bold text-gray-800 my-8">
        Direct SDK Demo App
      </h1>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsTokenExpired(false);
            setSdkOptions((prev) => ({ ...prev, language: "en" }));
          }}
        >
          Set English
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsTokenExpired(false);
            setSdkOptions((prev) => ({ ...prev, language: "es" }));
          }}
        >
          Set Spanish
        </button>
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsTokenExpired(false);
            setSdkOptions((prev) => ({ ...prev, theme: "dark" }));
          }}
        >
          Set Dark Theme
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsTokenExpired(false);
            setSdkOptions((prev) => ({ ...prev, theme: "light" }));
          }}
        >
          Set Light Theme
        </button>
      </div>
      {isTokenExpired && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          Expired Token!
        </div>
      )}
      <DemoSDK options={sdkOptions} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DirectSDKApp />
  </React.StrictMode>
);
