"use client";

import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
  const button = (
    <button
      className={clsx(
        className,
        "group flex h-8 w-fit flex-row items-stretch justify-center rounded border-2 border-transparent text-background transition-all duration-200 ease-out hover:scale-110 hover:bg-transparent",
        color === "primary" &&
          "bg-primary hover:border-primary hover:text-primary",
        color === "secondary" &&
          "bg-secondary hover:border-secondary hover:text-secondary",
        color === "tertiary" &&
          "bg-tertiary hover:border-tertiary hover:text-tertiary",
        color === "accent" && "bg-accent hover:border-accent hover:text-accent"
      )}
      {...props}
    >
      <span className="inline-flex h-full w-fit items-center pl-2">{icon}</span>
      <span className="inline-flex h-full flex-grow items-baseline px-2 font-light leading-8 sm:text-lg">
        {label}
      </span>
    </button>
  );

  return href ? (
    <Link href={href} target={target}>
      {button}
    </Link>
  ) : (
    button
  );
}
