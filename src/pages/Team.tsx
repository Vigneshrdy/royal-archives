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
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* TITLE — CUTS THROUGH FACE */}
      <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-[60px] md:text-[100px] lg:text-[148px] font-extrabold tracking-[-4px] md:tracking-[-7px] z-[5] whitespace-nowrap pointer-events-none text-foreground">
        KNOW <span className="ml-4 md:ml-9">{member.firstName}</span>
      </h1>

      {/* CENTER PORTRAIT */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70vh] md:h-[82vh] object-cover z-[3]"
        />
      ) : (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70vh] md:h-[82vh] w-[300px] md:w-[400px] bg-muted flex items-center justify-center z-[3]">
          <span className="text-[120px] font-extrabold text-muted-foreground">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* LEFT PORTRAIT - GRAYSCALE */}
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} left`}
          className="absolute bottom-0 -left-10 h-[50vh] md:h-[60vh] object-cover grayscale z-[2]"
        />
      ) : (
        <div className="absolute bottom-0 -left-10 h-[50vh] md:h-[60vh] w-[200px] md:w-[250px] bg-muted/70 flex items-center justify-center z-[2]">
          <span className="text-[80px] font-extrabold text-muted-foreground">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* RIGHT PORTRAIT - GRAYSCALE */}
      {member.image ? (
        <img
          src={member.image}
          alt={`${member.name} right`}
          className="absolute bottom-0 -right-10 h-[50vh] md:h-[60vh] object-cover grayscale z-[2]"
        />
      ) : (
        <div className="absolute bottom-0 -right-10 h-[50vh] md:h-[60vh] w-[200px] md:w-[250px] bg-muted/70 flex items-center justify-center z-[2]">
          <span className="text-[80px] font-extrabold text-muted-foreground">
            {member.firstName.charAt(0)}
          </span>
        </div>
      )}

      {/* TEXT BLOCK */}
      <div className="absolute right-4 md:right-36 top-1/2 -translate-y-1/2 w-64 md:w-72 z-[6]">
        <h2 className="text-xs md:text-sm tracking-[1.4px] mb-3 font-semibold text-foreground">
          {member.role}
        </h2>
        <p className="text-xs md:text-[13px] leading-relaxed text-muted-foreground">
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
