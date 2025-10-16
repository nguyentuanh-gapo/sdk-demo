import { createContext, useContext, useState, useEffect } from "react";
import { SDKContextType, SDKOptions } from "./types";
import { exchangeToken } from "./api-service";

const SDKContext = createContext<SDKContextType | undefined>(undefined);

export const useSDK = () => {
  const context = useContext(SDKContext);
  if (!context) {
    throw new Error("useSDK must be used within an SDKProvider");
  }
  return context;
};

export const SDKProvider: React.FC<{
  children: React.ReactNode;
  options?: SDKOptions;
}> = ({ children, options }) => {
  const [sdkState, setSdkState] = useState<SDKContextType>({
    language: options?.language,
    theme: options?.theme,
    token: options?.token,
  });

  useEffect(() => {
    const initializeToken = async () => {
      if (!options?.token) {
        const newToken = await exchangeToken();
        setSdkState((prevState) => ({ ...prevState, token: newToken }));
      }
    };
    initializeToken();
  }, [options?.token]);

  useEffect(() => {
    setSdkState((prevState) => ({
      ...prevState,
      language: options?.language,
      theme: options?.theme,
    }));
  }, [options?.language, options?.theme]);

  return <SDKContext.Provider value={sdkState}>{children}</SDKContext.Provider>;
};
