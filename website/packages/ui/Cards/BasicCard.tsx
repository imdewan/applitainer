import React from "react";

interface BasicCardProps {
  children: React.ReactNode;
  className?: string;
}
export function BasicCard({ children, className = "" }: BasicCardProps) {
  return (
    <div
      className={`inline-block border-2 border-black p-4 shadow-md cursor-pointer transition-all hover:shadow-xs ${className}`}
    >
      {children}
    </div>
  );
}
