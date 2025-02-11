import { cn } from "@/lib/utils";

export const Card = ({ className, children }) => {
  return (
    <div className={cn(
      "bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg p-6 shadow-sm",
      className
    )}>
      {children}
    </div>
  );
};