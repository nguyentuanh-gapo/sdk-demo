import * as React from "react";

export interface LogoProps {
  appName?: string;
  className?: string;
}

export const Logo = ({ appName = "ArtHub", className }: LogoProps) => {
  return (
    <div className={`text-2xl font-bold ${className || ""}`}>{appName}</div>
  );
};
