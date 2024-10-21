import React, { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H3({ children, className }: HeadingProps) {
  return (
    <h3 className={`font-head text-2xl font-medium ${className}`}>
      {children}
    </h3>
  );
}
