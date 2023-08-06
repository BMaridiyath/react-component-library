import React from "react";

export type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
