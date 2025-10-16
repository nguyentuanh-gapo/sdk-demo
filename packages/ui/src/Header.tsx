import * as React from "react";

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  return (
    <header
      className={`flex justify-between items-center p-4 bg-white shadow ${className || ""}`}
    >
      {children}
    </header>
  );
};
