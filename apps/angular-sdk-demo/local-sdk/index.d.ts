import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const getSDKOptions: () => SDKOptions;

export declare const initGapoSDK: (options?: SDKOptions) => Promise<SDKOptions>;

declare interface SDKContextType extends SDKOptions {
}

declare interface SDKOptions {
    token?: string;
    language?: string;
    theme?: string;
}

export declare const SDKProvider: React.FC<{
    children: React.ReactNode;
    options?: SDKOptions;
}>;

export declare const useSDK: () => SDKContextType;

export declare const Widget: ({ token, language, theme }: WidgetProps) => JSX_2.Element;

declare interface WidgetProps {
    token?: string;
    language?: string;
    theme?: string;
}

export { }
