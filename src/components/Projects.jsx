import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
import mindmatesimage from "../assets/TheMindMates.png";
import web3buddyimage from "../assets/web3buddy.png";
import agrosaathiimage from "../assets/agrosaathi.png";

const projects = [
  {
    id: 1,
    title: "The MindMates",
    tagline: "Mental Wellness Platform for Students",
    problem: "Students face mental health challenges but lack accessible, peer-driven support systems.",
    solution: "Built an AI-powered platform connecting students with peer supporters, offering anonymous chat, mood tracking, and wellness resources.",
    impact: "Finalist at TiE Kolkata, won ₹10k prize. Helping students find community and support.",
    image: mindmatesimage,
    year: "2025",
    role: "Founder & Lead Developer",
    github: "https://github.com/Rohansingh3001/The-Mindmate",
    link: "https://themindmate2025.vercel.app/",
    tags: ["React", "Firebase", "AI/ML", "Mental Health"],
    color: "#F97316",
  },
  {
    id: 2,
    title: "Web3Buddy",
    tagline: "AI Onboarding for Web3 Beginners",
    problem: "Web3 has a steep learning curve that intimidates newcomers.",
    solution: "Created an interactive AI companion that guides users through Web3 concepts with quests, challenges, and NFT badges.",
    impact: "Simplifies blockchain education with gamified learning paths.",
    image: web3buddyimage,
    year: "2025",
    role: "Full-Stack Developer",
    github: "https://github.com/Rohansingh3001/Web3Buddy",
    link: "https://web3-buddy-chi.vercel.app/",
    tags: ["Web3", "AI", "NFT", "Aptos"],
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "Agrosaathi (Project Kisan)",
    tagline: "AI-Powered Farming Assistant",
    problem: "Farmers lack access to timely crop information and government schemes.",
    solution: "Developed an AI assistant with crop disease detection (OCR), real-time market rates, and personalized government scheme recommendations.",
    impact: "Empowering farmers with technology to make informed decisions.",
    image: agrosaathiimage,
    year: "2025",
    role: "Full-Stack & ML Developer",
    github: "https://github.com/Rohansingh3001/project-kisan",
    link: "https://agrosaathi2025.vercel.app/",
    tags: ["AI/ML", "Computer Vision", "React", "Python"],
    color: "#22C55E",
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-[#FEF3C7] border-2 border-[#FACC15]/40 rounded-full text-sm font-handwritten text-[#78350F] mb-4 rotate-[-1deg]">
            things I''ve built
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FDF9F3] mb-4">
            Featured Projects
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-40 bg-[#F97316]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">
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
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8 sm:p-10 overflow-hidden transition-all duration-300"
                whileHover={{ y: -8, rotate: 0.5, boxShadow: "0 25px 50px rgba(15,23,42,0.45)" }}
              >
                {/* Corner fold effect */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#E5D9C9] border-r-transparent opacity-60" />
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[38px] border-r-[38px] border-t-[#F5F5F0] border-r-transparent" />
                </div>

                {/* Tape effect */}
                <div className="absolute -top-3 left-20 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[2deg]" />
                <div className="absolute -top-3 left-20 h-6 w-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                
                {/* Paper clip */}
                <div className="absolute -top-2 right-24 w-8 h-12 border-2 border-[#9CA3AF] rounded-full rotate-12 opacity-70" />
                <div className="absolute -top-1 right-[102px] w-6 h-10 border-2 border-[#9CA3AF] rounded-full rotate-12 opacity-70" />
                
                {/* Year stamp */}
                <div className="absolute top-6 right-6 px-3 py-1 border-2 border-dashed rounded shadow-sm" style={{ borderColor: project.color }}>
                  <span className="text-xs font-bold text-[#4B5563]">{project.year}</span>
                </div>
                
                {/* Handwritten note */}
                <div className="absolute top-4 left-4 font-handwritten text-sm opacity-40 rotate-[-3deg]" style={{ color: project.color }}>
                  ★ Featured
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Project Image */}
                  <motion.div
                    className="lg:col-span-2"
                    whileHover={{ scale: 1.03, rotate: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#E5D9C9] shadow-md bg-white">
                      {/* Polaroid-style frame */}
                      <div className="p-2 bg-white">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover rounded"
                        />
                      </div>
                      {/* Photo caption */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#E5D9C9] shadow-sm">
                        <p className="text-xs font-handwritten text-[#4B5563] text-center">{project.tagline}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 space-y-4">
                    {/* Title & Role */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-1 font-handwritten">
                        {project.title}
                      </h3>
                      <p className="text-lg italic text-[#4B5563] mb-2">{project.tagline}</p>
                      <p className="text-sm font-semibold text-[#F97316]">{project.role}</p>
                    </div>

                    {/* Problem  Solution  Impact */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-[#FEF3C7]/30 border-l-4 border-[#FACC15] rounded">
                        <FaLightbulb className="text-[#F97316] text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-[#F97316] mb-1">Problem</p>
                          <p className="text-sm text-[#4B5563] leading-relaxed">{project.problem}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#DBEAFE]/30 border-l-4 border-[#3B82F6] rounded">
                        <FaUsers className="text-[#3B82F6] text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-[#3B82F6] mb-1">Solution</p>
                          <p className="text-sm text-[#4B5563] leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#D1FAE5]/30 border-l-4 border-[#22C55E] rounded">
                        <FaTrophy className="text-[#22C55E] text-xl mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-[#22C55E] mb-1">Impact</p>
                          <p className="text-sm text-[#4B5563] leading-relaxed">{project.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-white border border-[#E5D9C9] rounded-full text-xs text-[#4B5563] font-medium shadow-sm"
                          whileHover={{ scale: 1.05, rotate: -2, borderColor: project.color }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#E5D9C9] rounded-lg font-semibold text-sm text-[#1F2933] hover:bg-[#FDF9F3] transition-all shadow-sm"
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
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white shadow-md transition-all"
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
