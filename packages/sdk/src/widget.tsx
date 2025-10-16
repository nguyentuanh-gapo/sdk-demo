import React from "react";
import { useSDK } from "./sdk-context";

export const Widget = () => {
  const { token, language, theme } = useSDK();

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">SDK Widget Content</h2>
      <p>
        <strong>Token:</strong> {token || "N/A"}
      </p>
      <p>
        <strong>Language:</strong> {language || "default"}
      </p>
      <p>
        <strong>Theme:</strong> {theme || "default"}
      </p>
    </div>
  );
};
