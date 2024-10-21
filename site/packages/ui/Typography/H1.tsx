import React, { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H1({ children, className }: HeadingProps) {
  return (
    <h1 className={`font-head text-5xl lg:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  );
}
