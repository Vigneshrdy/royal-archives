import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

import jinalImg from "@/assets/team/jinal-new.png";
import nidhiImg from "@/assets/team/nidhi-new.png";
import shoaibImg from "@/assets/team/shoaib-new.png";

interface TeamMember {
  name: string;
  firstName: string;
  role: string;
  description: string;
  image: string | null;
  offsetDown?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shoaib SSM",
    firstName: "SHOAIB SSM",
    role: "LEADING WITH VISION",
    description:
      "As Team Lead and Backend Developer, Shoaib drives the Nyaya AI project with expertise in architecture, model finetuning, and RAG implementation. His passion lies in making legal knowledge accessible to everyone through intelligent AI systems.",
    image: shoaibImg,
    offsetDown: true,
  },
  {
    name: "Vignesh Reddy",
    firstName: "VIGNESH REDDY",
    role: "DEPLOYMENT EXCELLENCE",
    description:
      "Specializing in deployment pipelines, backend development, and AI model optimization. Vignesh ensures seamless integration of finetuned models and RAG systems for production-ready performance.",
    image: null,
    offsetDown: false,
  },
  {
    name: "Jinal Thakkar",
    firstName: "JINAL THAKKAR",
    role: "CREATIVE DESIGN",
    description:
      "Crafting beautiful user experiences through thoughtful graphic design and modern frontend development. Jinal brings creative vision to life with pixel-perfect implementation and artistic flair.",
    image: jinalImg,
    offsetDown: false,
  },
  {
    name: "Nidhi Shah",
    firstName: "NIDHI SHAH",
    role: "VISUAL INNOVATION",
    description:
      "Combining artistic design sensibility with technical frontend expertise. Nidhi creates engaging visual interfaces that make complex legal information intuitive and accessible to all users.",
    image: nidhiImg,
    offsetDown: false,
  },
];

const TeamMemberSection = ({ member }: { member: TeamMember }) => {
  return (
    <section className="relative w-full bg-background">
      {/* MOBILE LAYOUT - Stacked vertically */}
      <div className="flex flex-col md:hidden min-h-screen">
        {/* Title */}
        <motion.div 
          className="pt-20 pb-4 text-center z-[5]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[24px] sm:text-[36px] font-extrabold tracking-[-1px] text-foreground leading-none">
            {member.firstName}
          </h1>
        </motion.div>

        {/* Main Photo */}
        <motion.div 
          className="flex-1 flex items-end justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-[45vh] object-cover z-[3]"
            />
          ) : (
            <div className="h-[45vh] w-[180px] bg-muted flex items-center justify-center z-[3] rounded-t-xl">
              <span className="text-[60px] font-extrabold text-muted-foreground/50">
                {member.firstName.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        {/* Description below photo */}
        <motion.div 
          className="px-6 py-6 bg-background z-[6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-xs tracking-[1px] mb-2 font-semibold text-foreground text-center">
            {member.role}
          </h2>
          <p className="text-xs leading-relaxed text-muted-foreground text-center max-w-sm mx-auto">
            {member.description}
          </p>
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT - Original absolute positioning */}
      <div className="hidden md:block relative min-h-screen overflow-hidden">
        {/* TITLE */}
        <motion.div 
          className="absolute top-28 lg:top-32 left-1/2 -translate-x-1/2 z-[5] pointer-events-none text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[60px] lg:text-[90px] xl:text-[110px] font-extrabold tracking-[-3px] lg:tracking-[-5px] text-foreground leading-none whitespace-nowrap">
            {member.firstName}
          </h1>
        </motion.div>

        {/* CENTER PORTRAIT */}
        {member.image ? (
          <motion.img
            src={member.image}
            alt={member.name}
            className={`absolute left-1/2 -translate-x-1/2 h-[70vh] lg:h-[82vh] object-cover z-[3] ${member.offsetDown ? 'bottom-[-8vh]' : 'bottom-0'}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        ) : (
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70vh] lg:h-[82vh] w-[350px] lg:w-[400px] bg-muted flex items-center justify-center z-[3] rounded-t-xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[120px] font-extrabold text-muted-foreground/50">
              {member.firstName.charAt(0)}
            </span>
          </motion.div>
        )}

        {/* LEFT PORTRAIT - GRAYSCALE */}
        {member.image ? (
          <motion.img
            src={member.image}
            alt={`${member.name} left`}
            className="absolute bottom-0 -left-8 lg:-left-10 h-[50vh] lg:h-[60vh] object-cover grayscale z-[2]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />
        ) : (
          <motion.div 
            className="absolute bottom-0 -left-8 lg:-left-10 h-[50vh] lg:h-[60vh] w-[180px] lg:w-[250px] bg-muted/50 flex items-center justify-center z-[2] rounded-t-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-[60px] lg:text-[80px] font-extrabold text-muted-foreground/30">
              {member.firstName.charAt(0)}
            </span>
          </motion.div>
        )}

        {/* RIGHT PORTRAIT - GRAYSCALE */}
        {member.image ? (
          <motion.img
            src={member.image}
            alt={`${member.name} right`}
            className="absolute bottom-0 -right-8 lg:-right-10 h-[50vh] lg:h-[60vh] object-cover grayscale z-[2]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          />
        ) : (
          <motion.div 
            className="absolute bottom-0 -right-8 lg:-right-10 h-[50vh] lg:h-[60vh] w-[180px] lg:w-[250px] bg-muted/50 flex items-center justify-center z-[2] rounded-t-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-[60px] lg:text-[80px] font-extrabold text-muted-foreground/30">
              {member.firstName.charAt(0)}
            </span>
          </motion.div>
        )}

        {/* TEXT BLOCK - Right side */}
        <motion.div 
          className="absolute right-12 lg:right-36 top-1/2 -translate-y-1/2 w-56 lg:w-72 z-[6]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-sm tracking-[1.4px] mb-3 font-semibold text-foreground">
            {member.role}
          </h2>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {member.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {teamMembers.map((member) => (
        <TeamMemberSection key={member.name} member={member} />
      ))}

      <Footer />
    </div>
  );
};

export default Team;
