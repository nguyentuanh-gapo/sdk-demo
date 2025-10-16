import * as React from "react";

export interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const IconButton = ({
  onClick,
  children,
  className,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-gray-200 ${className || ""}`}
    >
      {children}
    </button>
  );
};
