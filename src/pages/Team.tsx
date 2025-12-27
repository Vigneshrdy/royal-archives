import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import jinalImg from "@/assets/team/jinal.jpeg";
import nidhiImg from "@/assets/team/nidhi.jpeg";
import shoaibImg from "@/assets/team/shoaib.jpeg";
import lawyerLeft from "@/assets/team/lawyer-left.png";
import lawyerRight from "@/assets/team/lawyer-right.png";

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
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Black Border Frame */}
      <div 
        className="absolute inset-3 md:inset-6 lg:inset-8 pointer-events-none z-50"
        style={{ border: "2px solid #1a1a1a" }}
      />

      {/* Large Headline - Top */}
      <div className="pt-16 md:pt-20 lg:pt-24 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-serif font-bold tracking-tighter leading-[0.9] text-center"
          style={{ color: "#1a1a1a" }}
        >
          KNOW <span style={{ color: "#8B7355" }}>{member.firstName}</span>
        </motion.h2>
      </div>

      {/* Content Container */}
      <div className="relative" style={{ height: "calc(100vh - 250px)", minHeight: "500px" }}>
        
        {/* Left Figure */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 bottom-0 z-20 w-[25vw] md:w-[20vw] lg:w-[18vw] max-w-[220px]"
        >
          <img
            src={lawyerLeft}
            alt=""
            className="w-full h-auto object-contain"
            style={{ filter: "grayscale(100%)" }}
          />
        </motion.div>

        {/* Right Figure */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-0 bottom-0 z-20 w-[25vw] md:w-[20vw] lg:w-[18vw] max-w-[220px]"
        >
          <img
            src={lawyerRight}
            alt=""
            className="w-full h-auto object-contain"
            style={{ filter: "grayscale(100%)" }}
          />
        </motion.div>

        {/* Center Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30"
          style={{ width: "clamp(200px, 35vw, 380px)" }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover object-top"
              style={{ 
                maxHeight: "60vh",
                filter: "grayscale(100%)"
              }}
            />
          ) : (
            <div
              className="w-full flex items-end justify-center"
              style={{ 
                height: "50vh",
                background: "linear-gradient(to bottom, #e5e5e5, #cccccc)"
              }}
            >
              <div className="text-center pb-16">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(139, 115, 85, 0.3)" }}
                >
                  <span 
                    className="text-5xl md:text-6xl font-serif font-bold"
                    style={{ color: "#8B7355" }}
                  >
                    {member.firstName.charAt(0)}
                  </span>
                </div>
                <p style={{ color: "#666666", fontSize: "14px" }}>Photo coming soon</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Text Block - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute z-40 text-right"
          style={{
            right: "clamp(60px, 12vw, 180px)",
            top: "35%",
            maxWidth: "min(280px, 30vw)"
          }}
        >
          <h3 
            className="text-base md:text-xl lg:text-2xl font-serif font-bold mb-3 tracking-wide"
            style={{ color: "#1a1a1a" }}
          >
            {member.role}
          </h3>
          <p 
            className="text-xs md:text-sm leading-relaxed hidden md:block"
            style={{ color: "#555555" }}
          >
            {member.description}
          </p>
        </motion.div>
      </div>

      {/* Mobile Description */}
      <div className="md:hidden px-6 pb-8 pt-4" style={{ backgroundColor: "#ffffff" }}>
        <p 
          className="text-xs leading-relaxed text-center max-w-sm mx-auto"
          style={{ color: "#555555" }}
        >
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
      <section className="pt-24 pb-6 px-6" style={{ backgroundColor: "#ffffff" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <span 
            className="inline-block px-4 py-1.5 text-xs font-medium rounded-full mb-3 tracking-widest"
            style={{ backgroundColor: "rgba(139, 115, 85, 0.15)", color: "#8B7355" }}
          >
            KMIT • 2ND YEAR
          </span>
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold"
            style={{ color: "#1a1a1a" }}
          >
            Meet The <span style={{ color: "#8B7355" }}>Innovators</span>
          </h1>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member) => (
        <TeamMemberSection key={member.name} member={member} />
      ))}

      {/* Quote Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f8f8f8" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-2xl"
        >
          <blockquote 
            className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed"
            style={{ color: "#1a1a1a" }}
          >
            "Innovation happens when{" "}
            <span className="font-semibold" style={{ color: "#8B7355" }}>passion</span> meets{" "}
            <span className="font-semibold" style={{ color: "#8B7355" }}>purpose</span>."
          </blockquote>
          <p className="mt-3 text-sm" style={{ color: "#666666" }}>
            — The Nyaya AI Team
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
