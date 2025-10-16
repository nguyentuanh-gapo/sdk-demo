"use client";

import { ReactNode } from "react";
import React from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
