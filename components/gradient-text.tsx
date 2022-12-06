"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  const mousePosition = useMousePosition();
  const ref = useRef<HTMLSpanElement>(null);
  const { left, top } = ref.current?.getBoundingClientRect() ?? {
    left: 0,
    top: 0,
  };

  return (
    <span className={clsx(className, "w-fit bg-gradient bg-clip-text")}>
      <span
        ref={ref}
        className="text-transparent"
        style={{
          background: `text radial-gradient(
            36rem circle at ${mousePosition.x - left}px 
            ${mousePosition.y - top}px, #BDEDE4, transparent 50%)`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
