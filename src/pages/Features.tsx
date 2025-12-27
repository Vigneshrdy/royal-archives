import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/section";
import { IconBox } from "@/components/ui/icon-box";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BookOpen, Brain, Globe, Shield, MessageSquare, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  { icon: Search, title: "Natural Language Queries", description: "Ask in plain Hindi or English. No legal jargon required.", details: ["Intent recognition", "Context-aware follow-ups", "Colloquial support"] },
  { icon: BookOpen, title: "Indian Legal Knowledge Base", description: "Constitution, statutes, judgments, and government notifications.", details: ["All articles & amendments", "SC & HC judgments", "Government circulars"] },
  { icon: Brain, title: "Explainable AI", description: "No black boxes. Every answer has reasoning and citations.", details: ["Transparent chains", "Source citations", "Confidence indicators"] },
  { icon: Shield, title: "Privacy-First Architecture", description: "Legal questions are sensitive. Privacy is core.", details: ["End-to-end encryption", "Minimal retention", "No data sharing"] },
];

const upcoming = [
  { icon: Globe, title: "Multilingual Support", description: "Hindi, Tamil, Bengali, and more." },
  { icon: FileText, title: "Document Analysis", description: "Upload contracts for plain-language summaries." },
  { icon: Sparkles, title: "Case Law Research", description: "Semantic search across thousands of judgments." },
];

const Features = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Features</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-primary mb-6">Legal AI, Done Right</h1>
          <p className="text-lg text-muted-foreground mb-8">Accurate, explainable, and ethical — built for Indian law.</p>
          <Button asChild size="lg" className="font-sans shadow-book"><Link to="/chat">Try Nyaya AI<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </div>
      </Section>

      {/* Main Features */}
      <Section variant="muted">
        <div className="space-y-12 max-w-5xl mx-auto">
          {mainFeatures.map((f, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/3 flex justify-center lg:justify-start">
                <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-book">
                  <f.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground mb-4">{f.description}</p>
                <ul className="space-y-2">
                  {f.details.map((d, j) => <li key={j} className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-gold" /><span className="text-foreground">{d}</span></li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Upcoming */}
      <Section>
        <SectionHeader badge="Coming Soon" title="What's Next" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {upcoming.map((f, i) => (
            <div key={i} className="p-6 bg-card rounded-lg border border-border shadow-page text-center">
              <IconBox icon={f.icon} variant="gold" size="lg" className="mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-6">Ready to Explore Indian Law?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Ask your first legal question and experience the difference.</p>
          <Button asChild size="lg" variant="secondary" className="font-sans shadow-book"><Link to="/chat"><MessageSquare className="w-5 h-5 mr-2" />Start Asking</Link></Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Features;
