import { default as default_2 } from 'react';

export declare const DemoSDK: default_2.FC<DemoSDKProps>;

declare interface DemoSDKProps {
    options?: SDKOptions;
}

export declare interface SDKContextType extends SDKOptions {
}

export declare interface SDKOptions {
    token?: string;
    language?: string;
    theme?: string;
    onExpiredToken?: () => void;
}

export { }
