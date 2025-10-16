import * as React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow ${className || ""}`}>
      {children}
    </div>
  );
};
