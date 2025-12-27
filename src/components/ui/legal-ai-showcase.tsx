import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, BookOpen, Brain, Cpu, ChevronRight, Sparkles } from 'lucide-react';
import justiceSymbol from '@/assets/justice-symbol.png';
import llmBrain from '@/assets/llm-brain.png';

type SideId = 'legal' | 'ai';

const DATA = {
  legal: {
    id: 'legal' as SideId,
    label: 'Legal Foundation',
    title: 'Indian Legal Heritage',
    description: 'Rooted in the Constitution of India, centuries of jurisprudence, and the wisdom of our courts. Nyaya AI understands Indian law at its core.',
    image: justiceSymbol,
    gradient: 'from-gold/20 to-leather/30',
    features: [
      { label: 'Statutes', value: 95, icon: Scale },
      { label: 'Judgments', value: 88, icon: BookOpen },
    ],
  },
  ai: {
    id: 'ai' as SideId,
    label: 'AI Engine',
    title: 'Advanced Intelligence',
    description: 'Powered by state-of-the-art language models, trained specifically on Indian legal corpus for accurate, contextual legal assistance.',
    image: llmBrain,
    gradient: 'from-primary/20 to-ink/30',
    features: [
      { label: 'Accuracy', value: 97, icon: Brain },
      { label: 'Speed', value: 92, icon: Cpu },
    ],
  },
};

const imageVariants = (isLeft: boolean) => ({
  initial: { opacity: 0, scale: 1.3, filter: 'blur(10px)', rotate: isLeft ? -20 : 20 },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } },
  exit: { opacity: 0, scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.2 } },
});

export default function LegalAIShowcase() {
  const [active, setActive] = useState<SideId>('legal');
  const data = DATA[active];
  const isLegal = active === 'legal';

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-16 overflow-hidden">
      {/* Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${data.gradient} rounded-3xl`}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">The Nyaya Advantage</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Where Law Meets Intelligence</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full border border-border/30 animate-pulse" />
            <div className="absolute w-80 h-80 rounded-full border border-border/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={imageVariants(isLegal)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-parchment/90 shadow-elevated flex items-center justify-center">
                  <img src={data.image} alt={data.title} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute -bottom-4 px-4 py-2 bg-background/80 backdrop-blur rounded-full border border-border/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-gold" />
                {isLegal ? 'Comprehensive' : 'Intelligent'}
              </span>
            </motion.div>
          </div>

          {/* Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="space-y-6"
            >
              <div>
                <p className="text-gold uppercase tracking-widest text-xs mb-2">{data.label}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{data.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{data.description}</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {data.features.map((f) => (
                  <div key={f.label} className="bg-background/60 backdrop-blur rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <f.icon className="w-4 h-4" />
                      {f.label}
                    </div>
                    <div className="text-2xl font-semibold text-foreground">{f.value}%</div>
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gold rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${f.value}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-leather hover:bg-leather/90 text-parchment py-3 rounded-xl transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-gold" />
                98% Coverage
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Switcher */}
        <div className="flex justify-center mt-12">
          <div className="flex bg-background/60 backdrop-blur rounded-full p-1.5 border border-border/50">
            {Object.values(DATA).map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="showcase-bg"
                    className="absolute inset-0 bg-gold/20 rounded-full border border-gold/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
