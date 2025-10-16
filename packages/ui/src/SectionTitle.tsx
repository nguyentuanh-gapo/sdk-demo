import * as React from "react";

export interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2 className={`text-2xl font-semibold mb-4 ${className || ""}`}>
      {title}
    </h2>
  );
};
