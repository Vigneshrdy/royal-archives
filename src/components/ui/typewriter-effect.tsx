"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TypewriterEffectSmoothProps {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffectSmooth = ({ words, className, cursorClassName }: TypewriterEffectSmoothProps) => (
  <div className={cn("flex space-x-1 my-6", className)}>
    <motion.div
      className="overflow-hidden"
      initial={{ width: "0%" }}
      whileInView={{ width: "fit-content" }}
      transition={{ duration: 1.5, ease: "linear", delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="font-serif font-semibold whitespace-nowrap">
        {words.map((word, idx) => (
          <span key={idx} className={cn(word.className)}>
            {word.text}
          </span>
        ))}
      </div>
    </motion.div>
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className={cn("block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-primary", cursorClassName)}
    />
  </div>
);
