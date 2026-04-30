"use client";

import { motion } from "motion/react";
import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
};

export const ImageBlock = forwardRef<HTMLDivElement, Props>(
  ({ children }: Props, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-3xl p-8 border-2 flex justify-center items-center hover:shadow-2xl shadow-accent dark:shadow-dark-accent"
      >
        {children}
      </div>
    );
  },
);
ImageBlock.displayName = "ImageBlock";
export const MImageBlock = motion(ImageBlock);
