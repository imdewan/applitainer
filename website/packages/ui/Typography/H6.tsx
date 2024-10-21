import React, { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H6({ children, className }: HeadingProps) {
  return (
    <h3 className={`font-head ${className}`}>
      {children}
    </h3>
  );
}
