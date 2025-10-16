import * as React from "react";

export interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const Sidebar = ({ children, className }: SidebarProps) => {
  return (
    <aside
      className={`w-64 p-4 bg-gray-50 border-r border-gray-200 ${className || ""}`}
    >
      {children}
    </aside>
  );
};
