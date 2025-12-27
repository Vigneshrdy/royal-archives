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
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-screen flex flex-col">
        {/* Large Name Title at Top */}
        <div className="absolute top-16 md:top-20 left-0 right-0 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-foreground"
          >
            KNOW{" "}
            <span className="text-primary">{member.firstName}</span>
          </motion.h1>
        </div>

        {/* Images and Text Container */}
        <div className="flex-1 flex items-end justify-center relative">
          {/* Left Side Image - pushed to corner and smaller */}
          <div className="hidden md:block absolute bottom-0 -left-16 lg:-left-20 z-[1]">
            {member.image ? (
              <img
                src={member.image}
                alt={`${member.name} side`}
                className="h-[40vh] lg:h-[50vh] w-auto object-cover grayscale opacity-60"
              />
            ) : (
              <div className="h-[40vh] lg:h-[50vh] w-[140px] lg:w-[180px] bg-muted/50 flex items-center justify-center">
                <span className="text-5xl lg:text-6xl font-black text-muted-foreground/30">
                  {member.firstName.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Center Main Image */}
          <div className="relative z-[2]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="h-[55vh] md:h-[65vh] lg:h-[75vh] w-auto object-cover"
              />
            ) : (
              <div className="h-[55vh] md:h-[65vh] lg:h-[75vh] w-[250px] md:w-[300px] lg:w-[350px] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-muted-foreground/20 flex items-center justify-center mb-6">
                    <span className="text-5xl md:text-6xl font-black text-muted-foreground/50">
                      {member.firstName.charAt(0)}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side Image - pushed to corner and smaller */}
          <div className="hidden md:block absolute bottom-0 -right-16 lg:-right-20 z-[1]">
            {member.image ? (
              <img
                src={member.image}
                alt={`${member.name} side`}
                className="h-[40vh] lg:h-[50vh] w-auto object-cover grayscale opacity-60"
              />
            ) : (
              <div className="h-[40vh] lg:h-[50vh] w-[140px] lg:w-[180px] bg-muted/50 flex items-center justify-center">
                <span className="text-5xl lg:text-6xl font-black text-muted-foreground/30">
                  {member.firstName.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Text Block - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="hidden md:block absolute right-8 lg:right-20 xl:right-32 top-1/2 -translate-y-1/2 w-64 lg:w-80 z-[3]"
          >
            <h2 className="text-base lg:text-lg tracking-[2px] mb-4 font-bold text-foreground">
              {member.role}
            </h2>
            <p className="text-sm lg:text-base leading-relaxed text-muted-foreground">
              {member.description}
            </p>
          </motion.div>
        </div>

        {/* Mobile Description */}
        <div className="md:hidden px-6 py-8 bg-background">
          <h2 className="text-sm tracking-[2px] mb-3 font-bold text-foreground text-center">
            {member.role}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground text-center">
            {member.description}
          </p>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-sm md:text-base tracking-[3px] text-muted-foreground font-medium">
            KMIT • 2ND YEAR
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground">
            Meet The Innovators
          </h1>
        </motion.div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member) => (
        <TeamMemberSection key={member.name} member={member} />
      ))}

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            "Innovation happens when{" "}
            <span className="text-primary">passion</span> meets{" "}
            <span className="text-primary">purpose</span>."
          </blockquote>
          <cite className="block mt-8 text-base md:text-lg text-muted-foreground not-italic">
            — The Nyaya AI Team
          </cite>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
