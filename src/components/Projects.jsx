import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTrophy, 
  FaUsers, 
  FaLightbulb, 
  FaBrain, 
  FaCompass, 
  FaShieldAlt, 
  FaHeart, 
  FaRocket 
} from "react-icons/fa";
import mindmatesimage from "../assets/TheMindMates.jpg";
import mindcareerimage from "../assets/MindCareer.jpg";
import proviumimage from "../assets/Provium.png";
import sahchariimage from "../assets/Sahchari.jpg";

const projects = [
  {
    id: 1,
    title: "The MindMates",
    tagline: "AI Mental Wellness Platform for Students",
    problem: "Students experience high academic anxiety and mental health challenges without accessible, anonymous, or peer-driven support systems.",
    solution: "Architected an AI-powered platform featuring 24/7 empathetic conversational companion, mood tracking, guided wellness rituals, and peer connections.",
    impact: "Finalist at TiE Kolkata 2025 (won ₹10,000 prize grant). Helping students find community and mental wellness.",
    image: mindmatesimage,
    year: "2025 - Present",
    role: "Founder & Lead Developer",
    github: "https://github.com/Rohansingh3001/The-Mindmate",
    link: "https://themindmates.in",
    tags: ["React", "Firebase", "AI/ML", "Python", "Mental Health"],
    color: "#F97316",
    icon: <FaBrain />,
    category: "Mental Health",
  },
  {
    id: 2,
    title: "MindCareer",
    tagline: "AI Career Intelligence Platform for Students",
    problem: "Conventional education channels students into streams based solely on marks rather than cognitive traits and psychological archetypes.",
    solution: "Built a 10-archetype Career DNA assessment engine, real-time adaptive AI mock interviews (with Groq Whisper speech-to-text & camera posture detection), and roadmaps for 40+ modern careers.",
    impact: "Empowers Indian students to discover tailored career paths with real market salary insights and tailored 3-month action plans.",
    image: mindcareerimage,
    year: "2026",
    role: "Founder & Full-Stack Architect",
    github: "https://github.com/Rohansingh3001/mindCareer",
    link: "https://mindcareer.themindmates.in",
    tags: ["React 19", "PostgreSQL", "Node.js", "Groq LLaMA 3.3", "Whisper STT"],
    color: "#3B82F6",
    icon: <FaCompass />,
    category: "EdTech AI",
  },
  {
    id: 3,
    title: "Provium",
    tagline: "Autonomous ZK Compliance for DeFi Lending",
    problem: "DeFi protocols lack cryptographically verifiable proof of solvency without exposing sensitive individual collateral balances publicly.",
    solution: "Developed an autonomous multi-agent pipeline generating Noir zero-knowledge proofs (UltraHonk) verifying lending solvency on Base Sepolia, paired with an on-chain audit portal.",
    impact: "Provides verifiable proof of solvency inspired by the US GENIUS Act 1:1 reserve transparency goals.",
    image: proviumimage,
    year: "2026",
    role: "ZK & Full-Stack Developer",
    github: "https://github.com/Rohansingh3001/Provium",
    link: "https://provium.vercel.app",
    tags: ["Noir ZK", "Solidity", "Base Sepolia", "AI Agents", "Next.js"],
    color: "#8B5CF6",
    icon: <FaShieldAlt />,
    category: "ZK & DeFi",
  },
  {
    id: 4,
    title: "Sahchari",
    tagline: "Intelligent Cycle & Life Planning Companion",
    problem: "Women in India lack localized, holistic wellness tools that adapt to their real lifestyles, professions, and natural cycle intelligence.",
    solution: "Built a culturally attuned menstrual health web app with phase-mapped lifestyle guidance across 9 professions, Groq/Qwen 2.5 AI health chat, and automated Web Push reminders.",
    impact: "Culturally attuned reproductive and cycle intelligence helping women plan work, nutrition, and wellness.",
    image: sahchariimage,
    year: "2026",
    role: "Lead Developer",
    github: "https://github.com/Rohansingh3001/Sahchari",
    link: "https://sahchari.themindmates.in",
    tags: ["React 19", "TypeScript", "Firebase", "Web Push", "Groq AI"],
    color: "#EC4899",
    icon: <FaHeart />,
    category: "FemTech",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-4 sm:mb-6 font-handwritten break-words">
            Featured Projects
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 sm:w-40 bg-[#F97316]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Paper Card */}
              <motion.div 
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-4 sm:p-6 md:p-10 overflow-hidden transition-all duration-300"
                whileHover={{ y: -8, rotate: 0.5, boxShadow: "0 25px 50px rgba(15,23,42,0.45)" }}
              >
                {/* Corner fold effect */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#E5D9C9] border-r-transparent opacity-60" />
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[38px] border-r-[38px] border-t-[#F5F5F0] border-r-transparent" />
                </div>

                {/* Tape effect */}
                <div className="hidden sm:block absolute -top-3 left-20 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[2deg]" />
                <div className="hidden sm:block absolute -top-3 left-20 h-6 w-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                
                {/* Paper clip */}
                <div className="hidden sm:block absolute -top-2 right-24 w-8 h-12 border-2 border-[#9CA3AF] rounded-full rotate-12 opacity-70" />
                <div className="hidden sm:block absolute -top-1 right-[102px] w-6 h-10 border-2 border-[#9CA3AF] rounded-full rotate-12 opacity-70" />
                
                {/* Year stamp */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2.5 py-0.5 sm:px-3 sm:py-1 border-2 border-dashed rounded shadow-sm bg-white/80" style={{ borderColor: project.color }}>
                  <span className="text-[11px] sm:text-xs font-bold text-[#4B5563]">{project.year}</span>
                </div>
                
                {/* Handwritten note */}
                <div className="absolute top-4 left-4 font-handwritten text-xs sm:text-sm opacity-50 rotate-[-3deg]" style={{ color: project.color }}>
                  ★ Featured
                </div>

                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start pt-6 sm:pt-4">
                  {/* Project Image */}
                  <motion.div
                    className="lg:col-span-2"
                    whileHover={{ scale: 1.03, rotate: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#E5D9C9] shadow-md bg-white">
                      {/* Polaroid-style frame */}
                      <div className="p-2 bg-white">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-44 sm:h-56 md:h-64 object-cover object-top rounded border border-[#E5D9C9]/50"
                          />
                        ) : (
                          <div 
                            className="w-full h-44 sm:h-56 rounded flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
                            style={{ 
                              background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}35 100%)`,
                              border: `1.5px dashed ${project.color}60`
                            }}
                          >
                            <div 
                              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-md bg-white border border-[#E5D9C9]"
                              style={{ color: project.color }}
                            >
                              {project.icon || <FaRocket />}
                            </div>
                            <h4 className="font-bold text-xl text-[#111827] font-handwritten">{project.title}</h4>
                            <p className="text-xs text-[#4B5563] mt-1 font-medium">{project.tagline}</p>
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/85 border border-[#E5D9C9]" style={{ color: project.color }}>
                              {project.category || "Project"}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Photo caption */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#E5D9C9] shadow-sm">
                        <p className="text-xs font-handwritten text-[#4B5563] text-center truncate">{project.tagline}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 space-y-4">
                    {/* Title & Role */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-1 font-handwritten">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg italic text-[#4B5563] mb-1 sm:mb-2">{project.tagline}</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F97316]">{project.role}</p>
                    </div>

                    {/* Problem  Solution  Impact */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#FEF3C7]/30 border-l-4 border-[#FACC15] rounded">
                        <FaLightbulb className="text-[#F97316] text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[11px] sm:text-xs font-semibold text-[#F97316] mb-0.5">Problem</p>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">{project.problem}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#DBEAFE]/30 border-l-4 border-[#3B82F6] rounded">
                        <FaUsers className="text-[#3B82F6] text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[11px] sm:text-xs font-semibold text-[#3B82F6] mb-0.5">Solution</p>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#D1FAE5]/30 border-l-4 border-[#22C55E] rounded">
                        <FaTrophy className="text-[#22C55E] text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[11px] sm:text-xs font-semibold text-[#22C55E] mb-0.5">Impact</p>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">{project.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white border border-[#E5D9C9] rounded-full text-[11px] sm:text-xs text-[#4B5563] font-medium shadow-sm"
                          whileHover={{ scale: 1.05, rotate: -2, borderColor: project.color }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-[#E5D9C9] rounded-lg font-semibold text-sm text-[#1F2933] hover:bg-[#FDF9F3] transition-all shadow-sm w-full sm:w-auto"
                        whileHover={{ y: -3, rotate: -1, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white shadow-md transition-all w-full sm:w-auto"
                        style={{ backgroundColor: project.color }}
                        whileHover={{ y: -3, rotate: 1, boxShadow: "0 12px 24px rgba(0,0,0,0.25)" }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Bottom corner doodles */}
                <div className="absolute bottom-4 right-4 font-handwritten text-2xl opacity-20 rotate-[25deg]">
                  ✨
                </div>
                <div className="absolute bottom-8 left-6 font-handwritten text-sm opacity-30 rotate-[-8deg]" style={{ color: project.color }}>
                  Check it out! →
                </div>
                
                {/* Subtle paper texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiIC8+PC9zdmc+')]" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
