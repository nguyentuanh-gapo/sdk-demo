import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { DemoSDK } from "@demo/sdk";
import "./styles.css";

function WebDemoApp() {
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [sdkOptions, setSdkOptions] = useState({
    language: "en",
    theme: "dark",
    token: "static-web-token",
    onExpiredToken: () => {
      setIsTokenExpired(true);
      console.log("Web Demo: Token Expired!");
    },
  });

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 my-8">
        Web Demo ApplicationA
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        This demo showcases the SDK widget with integrated UI components.
      </p>
      <div className="flex space-x-4 mb-4">
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
            setSdkOptions((prev) => ({ ...prev, language: "vi" }));
          }}
        >
          Set Vietnamese
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
    <WebDemoApp />
  </React.StrictMode>
);
