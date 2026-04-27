import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Body = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} rounded-xl p-5 w-full border-2 dark:border-dark-secondary border-secondary`}
    >
      {children}
    </div>
  );
};
