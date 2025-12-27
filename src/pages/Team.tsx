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

const TeamMemberSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Container */}
      <div className="relative h-screen flex flex-col">
        {/* Large Name Title at Top */}
        <div className="pt-20 md:pt-24 lg:pt-28 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-serif font-bold tracking-tighter leading-none"
          >
            <span className="text-foreground">KNOW </span>
            <span className="text-primary">{member.firstName}</span>
          </motion.h1>
        </div>

        {/* Images and Text Container */}
        <div className="relative flex-1 flex items-end justify-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 bottom-0 z-10"
            style={{ width: "25vw", maxWidth: "280px" }}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={`${member.name} left`}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "50vh" }}
              />
            ) : (
              <div 
                className="w-full bg-muted/50 flex items-center justify-center"
                style={{ height: "40vh" }}
              >
                <span className="text-6xl font-serif font-bold text-primary/30">
                  {member.firstName.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Center Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-20"
            style={{ width: "35vw", maxWidth: "400px" }}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "65vh" }}
              />
            ) : (
              <div 
                className="w-full bg-muted flex items-center justify-center rounded-t-2xl"
                style={{ height: "55vh" }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-serif font-bold text-primary">
                      {member.firstName.charAt(0)}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">Photo coming soon</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-0 bottom-0 z-10"
            style={{ width: "25vw", maxWidth: "280px" }}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={`${member.name} right`}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "50vh" }}
              />
            ) : (
              <div 
                className="w-full bg-muted/50 flex items-center justify-center"
                style={{ height: "40vh" }}
              >
                <span className="text-6xl font-serif font-bold text-primary/30">
                  {member.firstName.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Text Block - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute top-0 right-8 md:right-16 lg:right-24 z-30 text-right max-w-[180px] md:max-w-[220px] lg:max-w-[280px]"
          >
            <h2 className="text-sm md:text-lg lg:text-xl font-serif font-bold text-foreground mb-3 tracking-wide uppercase">
              {member.role}
            </h2>
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
      {teamMembers.map((member) => (
        <TeamMemberSection key={member.name} member={member} />
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
