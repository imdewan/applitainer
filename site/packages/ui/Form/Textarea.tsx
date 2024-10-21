import React from "react";

export function Textarea({
  type = "text",
  placeholder = "Enter text...",
  className = "",
  ...props
}) {
  return (
    <textarea
        placeholder={placeholder}
        rows={4}
        className={`px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs ${className}`}
        {...props}
    />
  );
}
