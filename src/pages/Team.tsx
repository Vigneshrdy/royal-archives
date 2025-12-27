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

const TeamMemberSection = ({
  member,
}: {
  member: TeamMember;
}) => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-background overflow-hidden">
      {/* Black Border Frame */}
      <div className="absolute inset-4 md:inset-6 lg:inset-8 border-2 border-foreground/80 pointer-events-none z-50" />

      {/* Large Headline - Top */}
      <div className="pt-20 md:pt-24 lg:pt-28 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[13vw] md:text-[11vw] lg:text-[10vw] font-serif font-bold text-foreground tracking-tighter leading-[0.85] text-center"
        >
          KNOW <span className="text-primary">{member.firstName}</span>
        </motion.h2>
      </div>

      {/* Main Content Area */}
      <div className="relative h-[60vh] md:h-[65vh] mt-4 md:mt-0">
        {/* Left Figure - Desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block absolute left-0 bottom-0 w-40 lg:w-56 xl:w-64 z-20"
        >
          <img
            src={lawyerLeft}
            alt=""
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right Figure - Desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden md:block absolute right-0 bottom-0 w-40 lg:w-56 xl:w-64 z-20"
        >
          <img
            src={lawyerRight}
            alt=""
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Center Photo - Overlapping headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 bottom-0 z-30 w-[70%] md:w-[40%] lg:w-[35%] max-w-sm"
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
              className="w-full bg-gradient-to-b from-muted to-muted/70 flex items-end justify-center rounded-t-lg"
              style={{ height: "50vh" }}
            >
              <div className="text-center pb-16">
                <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-3 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
                    {member.firstName.charAt(0)}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">Photo coming soon</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Text Block - Right Side (Desktop) / Below (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute right-6 md:right-[12%] lg:right-[15%] top-[30%] md:top-[35%] z-40 max-w-[45%] md:max-w-xs text-right"
        >
          <h3 className="text-sm md:text-lg lg:text-xl font-serif font-bold text-foreground mb-2 tracking-wide">
            {member.role}
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-relaxed hidden md:block">
            {member.description}
          </p>
        </motion.div>
      </div>

      {/* Mobile: Side figures and description */}
      <div className="md:hidden relative px-4 pb-8">
        {/* Mobile figures row */}
        <div className="flex justify-between items-end -mt-20 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24"
          >
            <img src={lawyerLeft} alt="" className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24"
          >
            <img src={lawyerRight} alt="" className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Mobile description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-muted-foreground leading-relaxed text-center max-w-xs mx-auto"
        >
          {member.description}
        </motion.p>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-24 pb-4 px-6 bg-white dark:bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3 tracking-widest">
            KMIT • 2ND YEAR
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Meet The <span className="text-primary">Innovators</span>
          </h1>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMemberSection key={member.name} member={member} />
      ))}

      {/* Quote Section */}
      <section className="py-16 px-6 bg-muted/10">
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
          <p className="mt-3 text-muted-foreground text-sm">
            — The Nyaya AI Team
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
