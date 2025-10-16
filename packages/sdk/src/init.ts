import { SDKOptions } from "./types";

let currentSDKOptions: SDKOptions = {};

export const initGapoSDK = async (options?: SDKOptions) => {
  currentSDKOptions = { ...options };
  console.log("SDK configured with initial options:", currentSDKOptions);
  return currentSDKOptions;
};

export const getSDKOptions = (): SDKOptions => {
  return currentSDKOptions;
};
