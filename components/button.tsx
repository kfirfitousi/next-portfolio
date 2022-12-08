"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type MotionProps } from "framer-motion";
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
  const [rect, setRect] = useState({ left: 0, top: 0 });
  const ref = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const { left, top } = ref.current.getBoundingClientRect();
    setRect({ left, top });
  }, []);

  const button = (
    <motion.button
      ref={ref}
      className={clsx(
        className,
        "group flex h-8 w-fit flex-row items-stretch justify-center rounded border-2 border-transparent text-background",
        color === "primary" &&
          "bg-primary hover:border-primary hover:text-primary",
        color === "secondary" &&
          "bg-secondary hover:border-secondary hover:text-secondary",
        color === "tertiary" &&
          "bg-tertiary hover:border-tertiary hover:text-tertiary",
        color === "accent" && "bg-accent hover:border-accent hover:text-accent"
      )}
      onMouseMove={(e) =>
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }
      style={{
        backgroundImage: `radial-gradient(4rem circle at
            ${mousePosition.x}px ${mousePosition.y}px,
            rgba(200, 200, 200, 0.1) 0%, transparent 100%)`,
      }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
        scale: 1.15,
        transition: {
          scale: {
            type: "spring",
            stiffness: 300,
          },
        },
      }}
      {...props}
    >
      <span className="inline-flex h-full w-fit items-center pl-2">{icon}</span>
      <span className="inline-flex h-full flex-grow items-baseline px-2 font-light leading-8 sm:text-lg sm:leading-8">
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
