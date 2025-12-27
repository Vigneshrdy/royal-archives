import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  id?: string;
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export const Section = ({ children, className, variant = "default", id }: SectionProps) => {
  const variants = {
    default: "parchment-texture",
    muted: "bg-secondary/30",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={cn("py-24 relative", variants[variant], className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6">{children}</div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export const SectionHeader = ({ badge, title, description, className }: SectionHeaderProps) => (
  <div className={cn("text-center mb-16", className)}>
    {badge && (
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </div>
);
