import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconBox } from "@/components/ui/icon-box";

const trustItems = [
  { icon: BookOpen, title: "Grounded in Law", subtitle: "Citations & References" },
  { icon: Shield, title: "Privacy First", subtitle: "Secure & Confidential" },
  { icon: Scale, title: "Ethical AI", subtitle: "Transparent & Honest" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden parchment-texture">
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
          <Scale className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-foreground">India's First Legal AI Platform</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-6">
          <span className="flex items-baseline justify-center flex-wrap gap-x-3">
            <span>Justice,</span>
            <TypewriterEffectSmooth words={[{ text: "Explained", className: "gold-emboss" }]} className="inline-flex !my-0 !space-x-0" cursorClassName="!h-8 sm:!h-10 md:!h-12 lg:!h-14 !bg-gold" />
          </span>
          <span className="flex items-baseline justify-center flex-wrap gap-x-3">
            <span>Law,</span>
            <TypewriterEffectSmooth words={[{ text: "Simplified", className: "gold-emboss" }]} className="inline-flex !my-0 !space-x-0" cursorClassName="!h-8 sm:!h-10 md:!h-12 lg:!h-14 !bg-gold" />
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Nyaya AI transforms complex Indian legal language into clear, actionable insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="font-sans text-base px-8 group shadow-book">
            <Link to="/chat">
              Ask a Legal Question
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-sans text-base px-8">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <IconBox icon={item.icon} variant="muted" size="sm" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
