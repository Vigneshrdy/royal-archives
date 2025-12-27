import { LucideIcon } from "lucide-react";
import { IconBox } from "./icon-box";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconVariant?: "primary" | "gold" | "muted";
  horizontal?: boolean;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  className,
  iconVariant = "primary",
  horizontal = false,
}: FeatureCardProps) => (
  <div
    className={cn(
      "p-6 bg-card rounded-lg border border-border shadow-page hover:shadow-book transition-all group",
      horizontal ? "flex gap-4" : "",
      className
    )}
  >
    <IconBox icon={icon} variant={iconVariant} className="group-hover:scale-105 transition-transform" />
    <div className={horizontal ? "" : "mt-4"}>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

interface TagListProps {
  items: string[];
  variant?: "primary" | "gold";
}

export const TagList = ({ items, variant = "primary" }: TagListProps) => {
  const colors = {
    primary: "text-primary bg-primary/5 border-primary/10",
    gold: "text-gold bg-gold/10 border-gold/20",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className={cn("text-xs font-medium px-3 py-1.5 rounded border", colors[variant])}>
          {item}
        </span>
      ))}
    </div>
  );
};
