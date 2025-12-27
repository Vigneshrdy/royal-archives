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
  displayName: string;
  role: string;
  description: string;
  image: string | null;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shoaib",
    displayName: "MEET SHOAIB",
    role: "Team Lead • Backend Developer",
    description:
      "Leading the Nyaya AI project with expertise in backend architecture, model finetuning, and RAG implementation. Passionate about making legal knowledge accessible to everyone through intelligent AI systems.",
    image: shoaibImg,
  },
  {
    name: "Vignesh Reddy",
    displayName: "MEET VIGNESH",
    role: "Deployment & Developer",
    description:
      "Specializing in deployment pipelines, backend development, and AI model optimization. Ensures seamless integration of finetuned models and RAG systems for production-ready performance.",
    image: null,
  },
  {
    name: "Jinal Thakkar",
    displayName: "MEET JINAL",
    role: "GD & Frontend Developer",
    description:
      "Crafting beautiful user experiences through thoughtful graphic design and modern frontend development. Brings creative vision to life with pixel-perfect implementation.",
    image: jinalImg,
  },
  {
    name: "Nidhi Shah",
    displayName: "MEET NIDHI",
    role: "GD & Frontend Developer",
    description:
      "Combining artistic design sensibility with technical frontend expertise. Creates engaging visual interfaces that make complex legal information intuitive and accessible.",
    image: nidhiImg,
  },
];

const TeamMemberSection = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Left decorative image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-80 z-10 pointer-events-none"
      >
        <img
          src={lawyerLeft}
          alt="Legal professional"
          className="w-full h-auto object-contain opacity-90"
        />
      </motion.div>

      {/* Right decorative image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 bottom-0 w-48 md:w-64 lg:w-80 z-10 pointer-events-none"
      >
        <img
          src={lawyerRight}
          alt="Legal professional"
          className="w-full h-auto object-contain opacity-90"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Large Display Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-foreground tracking-tighter text-center mb-8 md:mb-12"
        >
          {member.displayName.split(" ").map((word, i) => (
            <span key={i}>
              {i === 1 ? (
                <span className="text-primary">{word}</span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </motion.h2>

        {/* Content Layout */}
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8 lg:gap-16`}
        >
          {/* Member Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4]">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top rounded-2xl shadow-elevated"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 rounded-2xl shadow-elevated">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-6xl font-serif font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-xl"
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-page">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                {member.role.split("•")[0].trim()}
              </h3>
              {member.role.includes("•") && (
                <p className="text-primary font-medium mb-4 text-lg">
                  {member.role.split("•")[1]?.trim()}
                </p>
              )}
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {member.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      {index < teamMembers.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
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
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground tracking-tighter leading-none mb-6"
            >
              THE <span className="text-primary">TEAM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Passionate innovators building the future of legal AI assistance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Member Sections */}
      {teamMembers.map((member, index) => (
        <TeamMemberSection key={member.name} member={member} index={index} />
      ))}

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
