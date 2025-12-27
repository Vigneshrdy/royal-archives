import { Lightbulb, Shield, BookOpen, Heart } from "lucide-react";
import { IconBox } from "@/components/ui/icon-box";

const visionPoints = [
  { icon: Lightbulb, text: "Legal literacy is accessible, not elite" },
  { icon: Shield, text: "AI strengthens democratic access to law" },
  { icon: BookOpen, text: "Indian legal knowledge is preserved and modernized" },
  { icon: Heart, text: "Technology empowers justice, not shortcuts it" },
];

const VisionSection = () => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Our Vision</span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Building India's Legal Future</h2>
        <p className="text-lg text-primary-foreground/80 mb-12">Access to legal knowledge should be a right, not a privilege.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {visionPoints.map((p, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <IconBox icon={p.icon} className="bg-gold/20 border-gold/30 text-gold" size="sm" />
              <span className="text-left text-primary-foreground/90">{p.text}</span>
            </div>
          ))}
        </div>

        <div className="p-8 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
          <p className="font-serif text-xl italic text-primary-foreground/90">
            "We aim to build one of India's first foundational legal intelligence systems, rooted in Indian values, data, and realities."
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
  </section>
);

export default VisionSection;
