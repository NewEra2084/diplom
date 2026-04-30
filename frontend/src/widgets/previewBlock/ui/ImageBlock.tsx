import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ImageBlock = ({ children }: Props) => {
  return (
    <div className="rounded-3xl p-8 border-2 flex justify-center items-center hover:shadow-2xl shadow-accent dark:shadow-dark-accent">
      {children}
    </div>
  );
};
