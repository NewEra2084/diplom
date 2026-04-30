"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useRef, useEffect, useState, ReactNode, useCallback } from "react";

export const AutoScrollCarousel = ({
  children,
  className,
  interval = 3000, // мс между переключениями
  slideDistance, // расстояние на один шаг (px)
}: {
  children: ReactNode;
  className: string;
  interval?: number;
  slideDistance: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (!containerRef.current) return;

    const maxIndex = Math.ceil(
      (containerRef.current.scrollWidth - containerRef.current.offsetWidth) /
        slideDistance,
    );

    let newIndex = Math.min(currentIndex + 1, maxIndex);
    if (newIndex === maxIndex) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);

    const newX = -newIndex * slideDistance;
    animate(x, newX, { duration: 0.5, ease: "easeOut" });
  }, [currentIndex, slideDistance, x]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, interval);
  }, [nextSlide, interval]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  useEffect(() => {
    if (containerRef.current) {
      setTotalWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth,
      );
    }
  }, [children]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className={className}
        transition={{
          repeat: Infinity,
          duration: 1000
        }}
        onHoverStart={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
        onHoverEnd={() => {
          resetInterval();
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
