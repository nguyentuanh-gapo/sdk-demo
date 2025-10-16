import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code className={`font-mono bg-gray-100 p-1 rounded ${className || ""}`}>
      {children}
    </code>
  );
}
