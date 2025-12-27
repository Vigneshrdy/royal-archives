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
    <section className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* TITLE — Stacked on mobile, inline on larger screens */}
      <div className="absolute top-16 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-[5] pointer-events-none text-center">
        <h1 className="text-[28px] sm:text-[48px] md:text-[80px] lg:text-[120px] xl:text-[148px] font-extrabold tracking-[-1px] sm:tracking-[-3px] md:tracking-[-5px] lg:tracking-[-7px] text-foreground leading-none">
          <span className="block sm:inline">KNOW</span>
          <span className="block sm:inline sm:ml-3 md:ml-6 lg:ml-9">{member.firstName}</span>
        </h1>
      </div>

      {/* CENTER PORTRAIT */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[82vh] object-cover z-[3]"
        />
      ) : (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[82vh] w-[180px] sm:w-[250px] md:w-[350px] lg:w-[400px] bg-muted flex items-center justify-center z-[3] rounded-t-xl">
          <span className="text-[60px] sm:text-[100px] md:text-[120px] font-extrabold text-muted-foreground/50">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* LEFT PORTRAIT - GRAYSCALE (hidden on mobile) */}
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} left`}
          className="hidden md:block absolute bottom-0 -left-8 lg:-left-10 h-[50vh] lg:h-[60vh] object-cover grayscale z-[2]"
        />
      ) : (
        <div className="hidden md:flex absolute bottom-0 -left-8 lg:-left-10 h-[50vh] lg:h-[60vh] w-[180px] lg:w-[250px] bg-muted/50 items-center justify-center z-[2] rounded-t-xl">
          <span className="text-[60px] lg:text-[80px] font-extrabold text-muted-foreground/30">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* RIGHT PORTRAIT - GRAYSCALE (hidden on mobile) */}
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} right`}
          className="hidden md:block absolute bottom-0 -right-8 lg:-right-10 h-[50vh] lg:h-[60vh] object-cover grayscale z-[2]"
        />
      ) : (
        <div className="hidden md:flex absolute bottom-0 -right-8 lg:-right-10 h-[50vh] lg:h-[60vh] w-[180px] lg:w-[250px] bg-muted/50 items-center justify-center z-[2] rounded-t-xl">
          <span className="text-[60px] lg:text-[80px] font-extrabold text-muted-foreground/30">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* TEXT BLOCK - Bottom on mobile, right side on larger screens */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-auto md:left-auto md:right-12 lg:right-36 md:top-1/2 md:-translate-y-1/2 w-auto md:w-56 lg:w-72 z-[6] bg-background/90 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
        <h2 className="text-[11px] md:text-sm tracking-[1px] md:tracking-[1.4px] mb-2 md:mb-3 font-semibold text-foreground">
          {member.role}
        </h2>
        <p className="text-[11px] md:text-[13px] leading-relaxed text-muted-foreground">
          {member.description}
        </p>
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
