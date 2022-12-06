import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: "primary" | "secondary" | "tertiary" | "accent";
  icon: React.ReactNode;
  label: string;
}

export default function ButtonB({
  className,
  color,
  icon,
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        "group flex h-8 w-8 flex-row items-center px-3 py-1.5 hover:w-max hover:rounded",
        color === "primary" &&
          "text-primary hover:border-primary hover:bg-primary hover:text-background",
        color === "secondary" &&
          "text-secondary hover:border-secondary hover:bg-secondary hover:text-background",
        color === "tertiary" &&
          "text-tertiary hover:border-tertiary hover:bg-tertiary hover:text-background",
        color === "accent" &&
          "text-accent hover:border-accent hover:bg-accent hover:text-background"
      )}
      {...props}
    >
      <span className="h-8 w-8 group-hover:h-6 group-hover:w-6">{icon}</span>
      <span className="hidden h-8 w-fit flex-grow text-center text-lg font-medium leading-8 group-hover:inline">
        {label}
      </span>
    </button>
  );
}
