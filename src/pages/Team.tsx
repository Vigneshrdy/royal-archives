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
    <section 
      className="relative w-full overflow-hidden bg-background"
      style={{ height: "100vh", minHeight: "700px" }}
    >
      {/* BIG OVERLAPPING HEADLINE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap text-center"
        style={{
          fontSize: "clamp(3rem, 15vw, 12rem)",
          fontFamily: "serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        <span className="text-foreground">KNOW </span>
        <span className="text-primary">{member.firstName}</span>
      </motion.h1>

      {/* CENTER MAIN PORTRAIT */}
      <motion.img
        src={member.image || ""}
        alt={member.name}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 object-contain"
        style={{
          width: "clamp(200px, 30vw, 400px)",
          maxHeight: "65%",
          display: member.image ? "block" : "none",
        }}
      />

      {/* Placeholder for members without photo */}
      {!member.image && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 flex items-center justify-center bg-muted rounded-t-2xl"
          style={{
            width: "clamp(200px, 30vw, 400px)",
            height: "50%",
          }}
        >
          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-serif font-bold text-primary">
                {member.firstName.charAt(0)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Photo coming soon</p>
          </div>
        </motion.div>
      )}

      {/* LEFT SIDE PORTRAIT */}
      <motion.img
        src={member.image || ""}
        alt={`${member.name} left`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-0 bottom-0 z-10 object-contain"
        style={{
          width: "clamp(120px, 22vw, 280px)",
          maxHeight: "50%",
          display: member.image ? "block" : "none",
        }}
      />

      {/* RIGHT SIDE PORTRAIT */}
      <motion.img
        src={member.image || ""}
        alt={`${member.name} right`}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute right-0 bottom-0 z-10 object-contain"
        style={{
          width: "clamp(120px, 22vw, 280px)",
          maxHeight: "50%",
          display: member.image ? "block" : "none",
        }}
      />

      {/* TEXT BLOCK - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute z-30 text-right"
        style={{
          top: "40%",
          right: "clamp(1rem, 8vw, 6rem)",
          maxWidth: "clamp(150px, 20vw, 280px)",
        }}
      >
        <h2 className="text-sm md:text-base lg:text-lg font-serif font-bold text-foreground mb-3 tracking-wide uppercase">
          {member.role}
        </h2>
        <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-relaxed hidden md:block">
          {member.description}
        </p>
      </motion.div>

      {/* Mobile Description */}
      <div className="absolute bottom-4 left-0 right-0 md:hidden px-6 z-30">
        <p className="text-[10px] text-muted-foreground leading-relaxed text-center max-w-xs mx-auto bg-background/80 backdrop-blur-sm p-3 rounded-lg">
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
