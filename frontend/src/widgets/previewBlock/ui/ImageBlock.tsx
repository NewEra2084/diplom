import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ImageBlock = ({ children }: Props) => {
  return <div>{children}</div>;
};
