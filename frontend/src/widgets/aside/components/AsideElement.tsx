"use client";
import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
  to: string;
};

export const AsideElement = ({ className, to, children }: Props) => {
  return (
    <Link
      href={to}
      className={`py-5 px-20 mb-5 text-center rounded-lg ${className}`}
    >
      {children}
    </Link>
  );
};
