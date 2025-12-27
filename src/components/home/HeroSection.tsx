import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden parchment-texture">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        
        {/* Decorative book spines on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary/5 to-transparent hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-primary/5 to-transparent hidden lg:block" />
        
        {/* Ornamental corners */}
        <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-border/30 rounded-tl-lg hidden lg:block" />
        <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-border/30 rounded-tr-lg hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-border/30 rounded-bl-lg hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-border/30 rounded-br-lg hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Scale className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">India's First Legal AI Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
            Justice, <span className="gold-emboss">Explained</span>.
            <br />
            Law, <span className="gold-emboss">Simplified</span>.
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-up opacity-0 stagger-2">
            Intelligence, Indian.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 stagger-3 leading-relaxed">
            Nyaya AI transforms complex Indian legal language into clear, actionable insights. 
            From the Constitution to Supreme Court judgments — accessible to everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 stagger-4">
            <Button asChild size="lg" className="font-sans text-base px-8 group shadow-book">
              <Link to="/chat">
                Ask a Legal Question
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-sans text-base px-8">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border animate-fade-in-up opacity-0 stagger-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Grounded in Law</p>
                <p className="text-xs text-muted-foreground">Citations & References</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Privacy First</p>
                <p className="text-xs text-muted-foreground">Secure & Confidential</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Ethical AI</p>
                <p className="text-xs text-muted-foreground">Transparent & Honest</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ornamental divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
