import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  className: string;
  children: ReactNode;
};

export const AsideElement = ({ className, onClick, children }: Props) => {
  return (
    <div className={`py-5 px-20 mb-5 rounded-lg ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
