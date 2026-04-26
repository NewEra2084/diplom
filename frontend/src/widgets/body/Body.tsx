import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
  className?: string;
};

export const Body = ({ children, title, className }: Props) => {
  return <div className={`${className} rounded-xl p-5 w-full border-2 dark:border-dark-secondary border-secondary`}><h4 className="text-2xl mb-4">{title}</h4>{children}</div>;
};
