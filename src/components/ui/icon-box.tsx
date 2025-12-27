import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "gold" | "muted";
  className?: string;
}

const sizes = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
};

const variants = {
  primary: "bg-primary/5 border-primary/10 text-primary",
  gold: "bg-gold/10 border-gold/20 text-gold",
  muted: "bg-secondary border-border text-foreground",
};

export const IconBox = ({ icon: Icon, size = "md", variant = "primary", className }: IconBoxProps) => (
  <div
    className={cn(
      "rounded-lg border flex items-center justify-center flex-shrink-0",
      sizes[size],
      variants[variant],
      className
    )}
  >
    <Icon className={iconSizes[size]} />
  </div>
);
