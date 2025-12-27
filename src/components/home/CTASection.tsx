import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const CTASection = () => (
  <Section>
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Get Started</span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6">
        Experience Legal AI, Done Right
      </h2>
      <p className="text-lg text-muted-foreground mb-10">
        Because when it comes to law, getting it right matters more than getting it fast.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="font-sans text-base px-8 group shadow-book">
          <Link to="/chat">
            <MessageSquare className="w-5 h-5 mr-2" />
            Ask Nyaya AI
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="font-sans text-base px-8">
          <Link to="/about">Learn About Our Approach</Link>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-10 max-w-lg mx-auto">
        Nyaya AI is building slowly, responsibly, and with intent.
      </p>
    </div>
  </Section>
);

export default CTASection;
