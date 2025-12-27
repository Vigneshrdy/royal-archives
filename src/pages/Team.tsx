import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import jinalImg from "@/assets/team/jinal.jpeg";
import nidhiImg from "@/assets/team/nidhi-edited.png";
import shoaibImg from "@/assets/team/shoaib.jpeg";

interface TeamMember {
  name: string;
  firstName: string;
  role: string;
  description: string;
  image: string | null;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shoaib",
    firstName: "SHOAIB",
    role: "LEADING WITH VISION",
    description:
      "As Team Lead and Backend Developer, Shoaib drives the Nyaya AI project with expertise in architecture, model finetuning, and RAG implementation. His passion lies in making legal knowledge accessible to everyone through intelligent AI systems.",
    image: shoaibImg,
  },
  {
    name: "Vignesh Reddy",
    firstName: "VIGNESH",
    role: "DEPLOYMENT EXCELLENCE",
    description:
      "Specializing in deployment pipelines, backend development, and AI model optimization. Vignesh ensures seamless integration of finetuned models and RAG systems for production-ready performance.",
    image: null,
  },
  {
    name: "Jinal Thakkar",
    firstName: "JINAL",
    role: "CREATIVE DESIGN",
    description:
      "Crafting beautiful user experiences through thoughtful graphic design and modern frontend development. Jinal brings creative vision to life with pixel-perfect implementation and artistic flair.",
    image: jinalImg,
  },
  {
    name: "Nidhi Shah",
    firstName: "NIDHI",
    role: "VISUAL INNOVATION",
    description:
      "Combining artistic design sensibility with technical frontend expertise. Nidhi creates engaging visual interfaces that make complex legal information intuitive and accessible to all users.",
    image: nidhiImg,
  },
];

// Get other team members for side images
const getOtherMembers = (currentName: string) => {
  const others = teamMembers.filter(m => m.name !== currentName && m.image);
  return others;
};

const TeamMemberSection = ({ member, index }: { member: TeamMember; index: number }) => {
  const otherMembers = getOtherMembers(member.name);
  const leftMember = otherMembers[0];
  const rightMember = otherMembers[1] || otherMembers[0];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background border-b border-border">
      {/* Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-border pointer-events-none z-40" />

      {/* Large Name Headline */}
      <div className="pt-24 md:pt-32 lg:pt-36 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-serif font-bold text-primary tracking-tighter leading-[0.85] text-center"
        >
          {member.firstName}
        </motion.h2>
      </div>

      {/* Content Container */}
      <div className="relative mt-8 md:mt-0" style={{ height: "60vh", minHeight: "400px" }}>
        
        {/* Left Side Member Photo */}
        {leftMember?.image && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 bottom-0 z-20 w-[22vw] md:w-[18vw] lg:w-[15vw] max-w-[180px]"
          >
            <img
              src={leftMember.image}
              alt={leftMember.name}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        )}

        {/* Right Side Member Photo */}
        {rightMember?.image && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-0 bottom-0 z-20 w-[22vw] md:w-[18vw] lg:w-[15vw] max-w-[180px]"
          >
            <img
              src={rightMember.image}
              alt={rightMember.name}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        )}

        {/* Center Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 w-[45vw] md:w-[30vw] lg:w-[25vw] max-w-[320px]"
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover object-top"
              style={{ maxHeight: "55vh" }}
            />
          ) : (
            <div
              className="w-full flex items-end justify-center rounded-t-xl bg-muted"
              style={{ height: "45vh" }}
            >
              <div className="text-center pb-12">
                <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
                    {member.firstName.charAt(0)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">Photo coming soon</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Text Block - Positioned to avoid overlap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute z-30 text-right right-[25vw] md:right-[22vw] lg:right-[20vw] top-[15%] md:top-[20%] max-w-[200px] md:max-w-[250px]"
        >
          <h3 className="text-sm md:text-lg lg:text-xl font-serif font-bold text-foreground mb-2 tracking-wide">
            {member.role}
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-relaxed hidden md:block">
            {member.description}
          </p>
        </motion.div>
      </div>

      {/* Mobile Description */}
      <div className="md:hidden px-6 py-6 bg-background">
        <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-sm mx-auto">
          {member.description}
        </p>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-24 pb-8 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 tracking-widest">
            KMIT • 2ND YEAR
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Meet The <span className="text-primary">Innovators</span>
          </h1>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMemberSection key={member.name} member={member} index={index} />
      ))}

      {/* Quote Section */}
      <section className="py-16 px-6 bg-muted/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-2xl"
        >
          <blockquote className="text-lg md:text-xl lg:text-2xl font-serif text-foreground leading-relaxed">
            "Innovation happens when{" "}
            <span className="text-primary font-semibold">passion</span> meets{" "}
            <span className="text-primary font-semibold">purpose</span>."
          </blockquote>
          <p className="mt-4 text-muted-foreground text-sm">
            — The Nyaya AI Team
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
