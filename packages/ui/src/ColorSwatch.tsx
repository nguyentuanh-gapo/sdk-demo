import * as React from "react";

export interface ColorSwatchProps {
  color: string;
  name: string;
  className?: string;
}

export const ColorSwatch = ({ color, name, className }: ColorSwatchProps) => {
  return (
    <div className={`flex flex-col items-center m-2 ${className || ""}`}>
      <div
        className="w-16 h-16 rounded-lg mb-2 border border-gray-200"
        style={{ backgroundColor: color }}
      ></div>
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
};
