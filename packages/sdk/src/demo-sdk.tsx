import React from "react";
import { SDKProvider } from "./sdk-context";
import { Widget } from "./widget";
import { SDKOptions } from "./types";

interface DemoSDKProps {
  options?: SDKOptions;
}

export const DemoSDK: React.FC<DemoSDKProps> = ({ options }) => {
  const handleTriggerExpiredToken = () => {
    if (options?.onExpiredToken) {
      options.onExpiredToken();
    }
  };

  return (
    <SDKProvider options={options}>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3>SDK Widget Content</h3>
        <p>Token: {options?.token || "N/A"}</p>
        <p>Language: {options?.language || "N/A"}</p>
        <p>Theme: {options?.theme || "N/A"}</p>
        <button
          onClick={handleTriggerExpiredToken}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Trigger Expired Token
        </button>
      </div>
      <Widget />
    </SDKProvider>
  );
};
