import { Users, GraduationCap, Rocket, Scale } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

const audiences = [
  { icon: Users, title: "Citizens", description: "Understand your rights, duties, and legal processes." },
  { icon: GraduationCap, title: "Students", description: "Learn Indian law intuitively for exams and case analysis." },
  { icon: Rocket, title: "Startups & MSMEs", description: "Understand compliance basics without expensive consultations." },
  { icon: Scale, title: "Lawyers & Researchers", description: "Faster legal research, case summarization, and drafting support." },
];

const boundaries = [
  "Does not provide binding legal advice",
  "Does not replace licensed professionals",
  "Does not fabricate or guess answers",
  "Does not hide uncertainty",
];

const AudienceSection = () => (
  <Section>
    <SectionHeader
      badge="For Everyone"
      title="Who Is Nyaya AI For?"
      description="From citizens seeking to understand their rights to legal professionals needing research support."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {audiences.map((a, i) => (
        <FeatureCard key={i} icon={a.icon} title={a.title} description={a.description} horizontal />
      ))}
    </div>

    <div className="ornament-divider my-16">
      <div className="w-2 h-2 rotate-45 bg-gold/60" />
    </div>

    <div className="max-w-3xl mx-auto text-center">
      <h3 className="font-serif text-2xl font-semibold text-primary mb-6">What Nyaya AI Is NOT</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {boundaries.map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
            <span className="text-destructive font-bold">✕</span>
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mt-6 text-sm">
        Nyaya AI <span className="text-foreground font-medium">assists understanding</span>, not decision-making without oversight.
      </p>
    </div>
  </Section>
);

export default AudienceSection;
