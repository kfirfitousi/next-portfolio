"use client";

import { useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends MotionProps {
  className?: string;
  color: "primary" | "secondary" | "tertiary" | "accent";
  icon: React.ReactNode;
  label: string;
  href?: string;
  target?: string;
}

export function Button({
  className,
  color,
  icon,
  label,
  href,
  target,
  ...props
}: ButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);
  const { left, top } = ref.current?.getBoundingClientRect() ?? {
    left: 0,
    top: 0,
  };

  const button = (
    <motion.button
      ref={ref}
      className={clsx(
        className,
        "group flex h-8 w-fit flex-row items-stretch justify-center rounded border-2 border-transparent text-background transition-all duration-200 ease-out",
        color === "primary" &&
          "bg-primary hover:border-primary hover:text-primary",
        color === "secondary" &&
          "bg-secondary hover:border-secondary hover:text-secondary",
        color === "tertiary" &&
          "bg-tertiary hover:border-tertiary hover:text-tertiary",
        color === "accent" && "bg-accent hover:border-accent hover:text-accent"
      )}
      onMouseMove={(e) =>
        setMousePosition({ x: e.clientX - left, y: e.clientY - top })
      }
      style={{
        backgroundImage: `radial-gradient(4rem circle at 
          ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(200, 200, 200, 0.2) 0%, transparent 100%)`,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(255, 255, 255, 0)",
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        duration: 0.3,
      }}
      {...props}
    >
      <span className="inline-flex h-full w-fit items-center pl-2">{icon}</span>
      <span className="inline-flex h-full flex-grow items-baseline px-2 font-light leading-8 sm:text-lg">
        {label}
      </span>
    </motion.button>
  );

  return href ? (
    <Link href={href} target={target}>
      {button}
    </Link>
  ) : (
    button
  );
}
