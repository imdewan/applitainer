import React, { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H5({ children, className }: HeadingProps) {
  return (
    <h3 className={`font-head text-lg font-medium ${className}`}>
      {children}
    </h3>
  );
}
