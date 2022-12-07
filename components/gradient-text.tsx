import clsx from "clsx";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={clsx(className, "w-fit bg-gradient bg-clip-text")}>
      <span className="text-transparent">{children}</span>
    </span>
  );
}
