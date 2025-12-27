import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { IconBox } from "@/components/ui/icon-box";
import { Shield, Heart, Eye, Brain, Code, Database, Zap } from "lucide-react";

const ethics = [
  { icon: Shield, title: "No Hallucinated Claims", description: "Every legal reference is grounded in verifiable sources." },
  { icon: Eye, title: "Clear Disclaimers", description: "All outputs include scope boundaries and limitations." },
  { icon: Brain, title: "Explainable Reasoning", description: "Understand the logic behind every answer." },
  { icon: Heart, title: "Human-in-the-Loop", description: "AI assists understanding — humans make decisions." },
];

const techStack = [
  { icon: Code, label: "Python & FastAPI", desc: "Backend APIs" },
  { icon: Brain, label: "LLMs", desc: "Domain-adapted models" },
  { icon: Zap, label: "NLP Pipelines", desc: "Legal entity extraction" },
  { icon: Database, label: "Vector Databases", desc: "Semantic legal search" },
];

const roadmap = [
  { phase: "Phase 1", status: "Current", items: ["Core legal Q&A", "Explainable responses", "Web platform launch"] },
  { phase: "Phase 2", status: "Planned", items: ["Judgment summarization", "Multilingual support", "Legal education tools"] },
  { phase: "Phase 3", status: "Future", items: ["Advanced research tools", "Academic partnerships", "Offline deployments"] },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">About Nyaya AI</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-primary mb-6">Rethinking How Law Meets Technology</h1>
          <p className="text-lg text-muted-foreground">Building India's first foundational legal intelligence system, rooted in Indian values and realities.</p>
        </div>
      </Section>

      {/* Ethics */}
      <Section variant="muted">
        <SectionHeader badge="Our Principles" title="Ethics & Responsibility" description="Law is high-impact. Trust is more important than cleverness." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ethics.map((e, i) => <FeatureCard key={i} icon={e.icon} title={e.title} description={e.description} horizontal />)}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionHeader badge="Technology" title="Built for Scale & Accuracy" />
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {techStack.map((t, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 bg-card rounded-lg border border-border shadow-page">
              <IconBox icon={t.icon} variant="gold" size="sm" />
              <div><p className="text-sm font-semibold text-foreground">{t.label}</p><p className="text-xs text-muted-foreground">{t.desc}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section variant="muted">
        <SectionHeader badge="Roadmap" title="Our Journey Ahead" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {roadmap.map((r, i) => (
            <div key={i} className={`p-6 rounded-lg border shadow-page ${r.status === 'Current' ? 'bg-primary/5 border-gold/30' : 'bg-card border-border'}`}>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">{r.phase}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${r.status === 'Current' ? 'bg-gold/20 text-gold' : 'bg-muted text-muted-foreground'}`}>{r.status}</span>
              </div>
              <ul className="space-y-2">
                {r.items.map((item, j) => <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-gold">•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
    <Footer />
  </div>
);

export default About;
