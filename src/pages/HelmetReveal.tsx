import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import legalHeritage from "@/assets/legal-heritage.jpg";
import legalFuture from "@/assets/legal-future.jpg";

const HelmetReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [revealSize, setRevealSize] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovering(true));
      container.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovering(true));
        container.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setRevealSize((prev) => Math.min(prev + 8, 300));
      }, 16);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setRevealSize((prev) => Math.max(prev - 12, 0));
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-serif font-medium">Back to Nyaya AI</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">Legal Vision</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Area */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden cursor-none pt-16"
      >
        {/* Base Layer - Traditional Legal */}
        <div className="absolute inset-0">
          <img 
            src={legalHeritage} 
            alt="Traditional Legal Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
        </div>

        {/* Reveal Layer - AI Future */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: `circle(${revealSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        >
          <img 
            src={legalFuture} 
            alt="AI-Powered Legal Future" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/30" />
        </div>

        {/* Cursor Glow Effect */}
        {isHovering && (
          <div 
            className="absolute pointer-events-none z-20"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: 300,
              height: 300,
            }}
          >
            <div className="w-full h-full rounded-full bg-accent/20 blur-3xl animate-pulse" />
          </div>
        )}

        {/* Custom Cursor */}
        {isHovering && (
          <motion.div 
            className="absolute pointer-events-none z-30"
            style={{
              left: mousePosition.x - 30,
              top: mousePosition.y - 30,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="w-[60px] h-[60px] rounded-full border-2 border-accent/60 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
          </motion.div>
        )}

        {/* Parchment texture overlay */}
        <div className="absolute inset-0 pointer-events-none parchment-texture opacity-30" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {/* Top Section */}
          <div className="pt-24 px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                The Evolution of
                <span className="block text-accent">Legal Intelligence</span>
              </h1>
            </motion.div>
          </div>

          {/* Bottom Info Panel */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-end justify-between"
            >
              {/* Left Card */}
              <div className="pointer-events-auto bg-card/90 backdrop-blur-md rounded-xl p-6 border border-border shadow-elevated max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-leather/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-leather" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Heritage</h3>
                    <p className="text-sm text-muted-foreground">Traditional Legal Wisdom</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Centuries of Indian legal precedents, constitutional foundations, and scholarly interpretations form the bedrock of our justice system.
                </p>
              </div>

              {/* Center Instruction */}
              <div className="pointer-events-auto text-center">
                <motion.div 
                  className="bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-accent font-medium text-sm">
                    Move cursor to reveal the future
                  </p>
                </motion.div>
              </div>

              {/* Right Card */}
              <div className="pointer-events-auto bg-card/90 backdrop-blur-md rounded-xl p-6 border border-border shadow-elevated max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Future</h3>
                    <p className="text-sm text-muted-foreground">AI-Powered Justice</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nyaya AI transforms complex legal knowledge into accessible, explainable insights powered by advanced artificial intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-8 w-24 h-24 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl pointer-events-none" />
      </div>

      {/* Quote Section */}
      <div className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground max-w-3xl mx-auto">
            "The law must be stable, but it must not stand still."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground font-sans">
            — Roscoe Pound
          </cite>
          <p className="mt-6 text-sm text-muted-foreground max-w-xl mx-auto">
            At Nyaya AI, we honor the timeless principles of Indian law while embracing the transformative power of artificial intelligence to make justice accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelmetReveal;
