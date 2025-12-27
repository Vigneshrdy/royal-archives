import { AlertTriangle, Search, DollarSign, Lock } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { IconBox } from "@/components/ui/icon-box";

const problems = [
  { icon: Search, title: "Vast & Fragmented", description: "Indian law spans constitutions, statutes, judgments across multiple jurisdictions." },
  { icon: Lock, title: "Dense Legal Language", description: "Complex terminology makes legal documents inaccessible to non-experts." },
  { icon: AlertTriangle, title: "Hard to Search", description: "Finding relevant information across timelines requires specialized expertise." },
  { icon: DollarSign, title: "Expensive to Interpret", description: "Professional legal consultation remains costly for most Indians." },
];

const ProblemSection = () => (
  <Section variant="muted">
    <SectionHeader
      badge="The Challenge"
      title="Why Legal Access Matters"
      description="India has one of the world's most complex legal ecosystems, yet access remains limited and expensive."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {problems.map((p, i) => (
        <FeatureCard key={i} icon={p.icon} title={p.title} description={p.description} />
      ))}
    </div>

    <div className="mt-16 p-8 bg-card rounded-lg border border-border shadow-book flex flex-col md:flex-row items-start gap-6">
      <IconBox icon={AlertTriangle} size="lg" className="bg-destructive/10 border-destructive/20 text-destructive" />
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Why Existing AI Tools Fall Short</h3>
        <p className="text-muted-foreground">
          Most AI tools are trained on Western datasets, poorly aligned with Indian legal structure, and lack transparency for sensitive legal matters.
        </p>
      </div>
    </div>
  </Section>
);

export default ProblemSection;
