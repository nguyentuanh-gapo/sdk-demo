import * as React from "react";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "danger";
  children: React.ReactNode;
}

export const Alert = ({ variant = "info", children }: AlertProps) => {
  const baseClasses = "p-4 rounded mb-4";

  const variantClasses = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div>{children}</div>
    </div>
  );
};
