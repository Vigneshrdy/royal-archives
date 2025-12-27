import { motion } from "framer-motion";
import { Scale, Gavel, BookOpen, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import jinalImg from "@/assets/team/jinal.jpeg";
import nidhiImg from "@/assets/team/nidhi.jpeg";
import shoaibImg from "@/assets/team/shoaib.jpeg";

interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  image: string | null;
  isLead?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shoaib",
    role: "Team Lead",
    responsibilities: ["Backend", "Finetuning", "RAG"],
    image: shoaibImg,
    isLead: true,
  },
  {
    name: "Vignesh Reddy",
    role: "Deployment & Developer",
    responsibilities: ["Backend", "Finetuning", "RAG"],
    image: null, // Placeholder
  },
  {
    name: "Jinal Thakkar",
    role: "GD & Frontend",
    responsibilities: ["Graphic Design", "Frontend Development"],
    image: jinalImg,
  },
  {
    name: "Nidhi Shah",
    role: "GD & Frontend",
    responsibilities: ["Graphic Design", "Frontend Development"],
    image: nidhiImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -10 }}
      className={`relative group ${member.isLead ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      {/* Name above image */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground tracking-tight"
      >
        {member.name}
      </motion.h3>

      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-[3/4] shadow-elevated">
        {member.image ? (
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <div className="text-center p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-5xl font-serif font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Photo coming soon</p>
            </div>
          </div>
        )}

        {/* Overlay with role info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex flex-col justify-end p-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {member.isLead && (
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                Team Lead
              </span>
            )}
            <p className="text-lg font-semibold text-foreground mb-2">{member.role}</p>
            <div className="flex flex-wrap gap-2">
              {member.responsibilities.map((resp, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-secondary/80 text-secondary-foreground rounded-md"
                >
                  {resp}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Floating law icons - left side */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-4 md:left-10 top-40 opacity-10 dark:opacity-5"
        >
          <Scale className="w-24 h-24 md:w-40 md:h-40 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute left-8 md:left-20 bottom-20 opacity-10 dark:opacity-5"
        >
          <BookOpen className="w-20 h-20 md:w-32 md:h-32 text-primary" />
        </motion.div>

        {/* Floating law icons - right side */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-4 md:right-10 top-60 opacity-10 dark:opacity-5"
        >
          <Gavel className="w-24 h-24 md:w-40 md:h-40 text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute right-8 md:right-20 bottom-40 opacity-10 dark:opacity-5"
        >
          <FileText className="w-20 h-20 md:w-32 md:h-32 text-primary" />
        </motion.div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full"
            >
              KMIT • 2nd Year
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground tracking-tighter leading-none mb-6"
            >
              MEET THE
              <br />
              <span className="text-primary">TEAM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Passionate innovators building the future of legal AI assistance.
              United by curiosity, driven by impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </div>

        {/* More floating decorations */}
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
          className="absolute left-1/4 top-1/2 opacity-5 pointer-events-none"
        >
          <Scale className="w-64 h-64 text-primary" />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-3xl"
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed"
          >
            "Innovation happens when{" "}
            <span className="text-primary font-semibold">passion</span> meets{" "}
            <span className="text-primary font-semibold">purpose</span>."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-muted-foreground"
          >
            — The Nyaya AI Team
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
