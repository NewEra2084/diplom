"use client"

import Clocks from "@/../public/Frame.svg";
import { motion } from "motion/react";
import { forwardRef, HTMLAttributes } from "react";
type Props = {
  children: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const SubTitle = forwardRef<HTMLDivElement, Props>(
  ({ children, className }: Props, ref) => {
    console.log("fffff");

    return (
      <div
        ref={ref}
        className={`flex items-center gap-3 text-xl lg:text-2xl font-bold ${className}`}
      >
        <img src={Clocks.src} alt="SubLogo" className="h-16" />
        <p>{children}</p>
      </div>
    );
  },
);
SubTitle.displayName = "SubTitle";

export const MSubTitle = motion(SubTitle);
