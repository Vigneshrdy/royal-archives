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
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">
      {/* Large Headline */}
      <div className="absolute top-24 md:top-32 left-0 right-0 z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-serif font-bold text-foreground tracking-tighter leading-none text-center whitespace-nowrap"
        >
          KNOW<span className="text-primary ml-4">{member.firstName}</span>
        </motion.h2>
      </div>

      {/* Left Figure */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-0 bottom-0 w-32 md:w-48 lg:w-64 xl:w-72 z-20"
      >
        <img
          src={lawyerLeft}
          alt=""
          className="w-full h-auto object-contain grayscale"
        />
      </motion.div>

      {/* Right Figure */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-64 xl:w-72 z-20"
      >
        <img
          src={lawyerRight}
          alt=""
          className="w-full h-auto object-contain grayscale"
        />
      </motion.div>

      {/* Center Photo - Large and Prominent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 w-[50vw] md:w-[35vw] lg:w-[30vw] max-w-md"
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-auto object-cover object-top grayscale"
            style={{ maxHeight: "70vh" }}
          />
        ) : (
          <div
            className="w-full bg-gradient-to-b from-muted to-muted/80 flex items-end justify-center"
            style={{ height: "60vh" }}
          >
            <div className="text-center pb-20">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-serif font-bold text-primary">
                  {member.firstName.charAt(0)}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Photo coming soon</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Text Block - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-4 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/4 z-40 max-w-xs md:max-w-sm text-right"
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-3 tracking-wide">
          {member.role}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {member.description}
        </p>
      </motion.div>

      {/* Decorative border */}
      <div className="absolute inset-4 md:inset-8 border-2 border-foreground pointer-events-none z-0" />
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-28 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 tracking-widest">
            KMIT • 2ND YEAR
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Meet The <span className="text-primary">Innovators</span>
          </h1>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMemberSection key={member.name} member={member} index={index} />
      ))}

      {/* Quote Section */}
      <section className="py-20 px-6 bg-muted/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-2xl"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed">
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
