import { type JSX } from "react";

export function LinkCard({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title?: string;
  children: React.ReactNode;
  href?: string;
}): JSX.Element {
  return (
    <a
      className={`block p-4 rounded-md border border-gray-200 hover:bg-gray-100 ${className || ""}`}
      href={href || "#"}
    >
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </a>
  );
}
