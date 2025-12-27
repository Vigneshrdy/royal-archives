import { Search, BookOpen, Brain, Globe, Shield, LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { IconBox } from "@/components/ui/icon-box";
import { TagList } from "@/components/ui/feature-card";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  planned?: boolean;
}

const features: Feature[] = [
  { icon: Search, title: "Legal Query Understanding", description: "Ask questions in plain language — Nyaya AI interprets intent and responds with structured explanations.", tags: ["Relevant acts", "Penalties", "Citations"] },
  { icon: BookOpen, title: "Indian Law Knowledge Base", description: "Built on the Constitution, Central and State statutes, SC/HC judgments, and government notifications.", tags: ["Constitution", "Statutes", "Judgments"] },
  { icon: Brain, title: "Explainable AI Outputs", description: "Step-by-step reasoning, legal grounding, and clear disclaimers on all outputs.", tags: ["Reasoning", "Citations", "Disclaimers"] },
  { icon: Globe, title: "Multilingual & Inclusive", description: "Designed to support regional languages and simple explanations for non-legal users.", planned: true },
  { icon: Shield, title: "Privacy-First Design", description: "No unnecessary data collection, secure query handling, and no resale of queries.", tags: ["Secure", "Minimal data", "Private"] },
];

const FeaturesSection = () => (
  <Section variant="muted">
    <SectionHeader
      badge="Capabilities"
      title="What Nyaya AI Does"
      description="Powerful features to make Indian law accessible, understandable, and actionable."
    />

    <div className="space-y-6 max-w-4xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="p-6 bg-card rounded-lg border border-border shadow-page hover:shadow-book transition-all flex flex-col md:flex-row gap-6">
          <div className="flex items-start gap-4 md:w-1/3">
            <IconBox icon={f.icon} />
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{f.title}</h3>
              {f.planned && <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded">Coming Soon</span>}
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-muted-foreground mb-4">{f.description}</p>
            {f.tags && <TagList items={f.tags} variant="gold" />}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
