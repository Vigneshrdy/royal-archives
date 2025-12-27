import { CheckCircle, Target, Eye, Compass, Heart } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

const principles = [
  { icon: Target, title: "Accuracy over Answers", description: "We prioritize correct information over fast responses." },
  { icon: Eye, title: "Explainability over Speed", description: "Understand the reasoning behind every answer." },
  { icon: Compass, title: "Context over Generalization", description: "Built specifically for Indian law." },
  { icon: Heart, title: "Ethics over Shortcuts", description: "Clear disclaimers and honest limitations." },
];

const SolutionSection = () => (
  <Section>
    <SectionHeader
      badge="Our Approach"
      title="Domain-Specific Legal AI"
      description="Nyaya AI is trained specifically for the Indian legal system. We augment legal understanding, not replace lawyers."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {principles.map((p, i) => (
        <FeatureCard key={i} icon={p.icon} title={p.title} description={p.description} iconVariant="gold" horizontal />
      ))}
    </div>

    <div className="ornament-divider my-16">
      <div className="w-2 h-2 rotate-45 bg-gold/60" />
    </div>

    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 mb-4">
        <CheckCircle className="w-5 h-5 text-gold" />
        <span className="font-serif text-lg font-semibold text-primary">Built for India</span>
      </div>
      <p className="text-lg text-muted-foreground">
        Built using Indian legal sources — the Constitution, statutes, Supreme Court judgments, and government notifications.
      </p>
    </div>
  </Section>
);

export default SolutionSection;
