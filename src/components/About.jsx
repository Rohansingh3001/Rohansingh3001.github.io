import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { 
  FaRocket, 
  FaCode, 
  FaBrain, 
  FaUsers, 
  FaLaptopCode, 
  FaRobot, 
  FaNetworkWired, 
  FaCloud,
  FaBuilding,
  FaTrophy
} from "react-icons/fa";
import mindmatesLogo from "../assets/mindmates_logo.png";
import proviumLogo from "../assets/provium_logo.png";
import sahchariLogo from "../assets/sahchari_logo.jpg";
import mindcareerLogo from "../assets/mindcareer_logo.jpg";
import profilePic from "../assets/Image.jpg";
import fortunemindsImg from "../assets/fortuneminds.png";
import gdgocImg from "../assets/gdgoc.jpg";

// ElevenLabs-style inline sticker chip component
const InlineSticker = ({ 
  image, 
  icon, 
  name, 
  tag, 
  rotate = "rotate-0", 
  target, 
  color = "#F97316", 
  bgGradient, 
  bgClass,
  fitContain = false,
  isAvatar = false,
  link
}) => {
  const [hovered, setHovered] = useState(false);

  const content = (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center justify-center mx-1 sm:mx-1.5 relative group cursor-pointer select-none align-[-3px] sm:align-[-4px]"
    >
      {/* Floating Micro Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 5, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 3, scale: 0.94 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#111827]/95 text-white border border-white/20 whitespace-nowrap pointer-events-none z-50 shadow-xl backdrop-blur-md flex items-center gap-1.5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="font-semibold text-white">{name}</span>
            <span className="text-white/40 font-mono">/</span>
            <span className="text-[10px] text-orange-300 font-mono">{tag}</span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Physical Sticker Frame */}
      <motion.span
        whileHover={{ scale: 1.25, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className={`relative inline-flex items-center justify-center ${rotate} ${
          isAvatar ? "rounded-full" : "rounded-lg sm:rounded-xl"
        } w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 overflow-hidden border border-white/90 shadow-sm group-hover:shadow-lg transition-shadow duration-300 ring-1 ring-black/10 flex-shrink-0 ${
          bgClass ? bgClass : (bgGradient ? `bg-gradient-to-tr ${bgGradient}` : "bg-neutral-900")
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className={`w-full h-full ${
              fitContain ? "object-contain p-0.5 sm:p-1" : "object-cover"
            } object-center group-hover:scale-105 transition-transform duration-300`}
          />
        ) : (
          icon
        )}

        {/* Specular sheen */}
        <span
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none ${
            isAvatar ? "rounded-full" : "rounded-lg sm:rounded-xl"
          }`}
        />
      </motion.span>
    </span>
  );

  if (target) {
    return (
      <Link to={target} smooth={true} duration={600} offset={-60}>
        {content}
      </Link>
    );
  }

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const About = () => {
  const stats = [
    { number: "25+", label: "Projects Shipped", icon: <FaCode /> },
    { number: "10+", label: "Hackathons", icon: <FaRocket /> },
    { number: "Ex-Intern", label: "Fortune Minds", icon: <FaBrain /> },
    { number: "NiT'27", label: "B.Tech CSE (AIML)", icon: <FaUsers /> },
  ];

  const skills = [
    { 
      title: "Full-Stack & Microservices", 
      description: "Building scalable web apps and RESTful APIs with React.js, Node.js, Express, Python, and Firebase.", 
      icon: <FaLaptopCode />,
      color: "#3B82F6"
    },
    { 
      title: "AI / ML & Autonomous Agents", 
      description: "Designing intelligent agent workflows with LLMs, Groq, Agno framework, and ML models.", 
      icon: <FaRobot />,
      color: "#8B5CF6"
    },
    { 
      title: "Core CS & Systems", 
      description: "Solid foundations in Data Structures & Algorithms (DSA), OOP, DBMS, and Computer Networks.", 
      icon: <FaNetworkWired />,
      color: "#F97316"
    },
    { 
      title: "DevOps, Cloud & SAP", 
      description: "Hands-on with Docker, CI/CD, Git, SDLC, and SAP Certified Back-End Developer in ABAP Cloud.", 
      icon: <FaCloud />,
      color: "#10B981"
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with handwritten label */}
        <motion.div
          className="text-center mb-12 sm:mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-4 sm:mb-6 font-handwritten break-words">
            About Me
          </h2>
          
          {/* Hand-drawn underline */}
          <div className="flex justify-center">
            <div className="h-1 w-28 sm:w-32 bg-[#F97316]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />
          </div>
        </motion.div>

        {/* Who I Am - Main Paper Card */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-5 sm:p-8 md:p-12 overflow-hidden">
            {/* Tape effect */}
            <div className="absolute -top-3 left-8 sm:left-16 h-6 w-20 sm:w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[2deg]" />
            
            {/* Hand-drawn arrow pointing to heading */}
            <div className="hidden md:block absolute -left-8 top-8 text-2xl rotate-[180deg] opacity-60">
              
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6 font-handwritten">
               Who I Am
            </h3>
            
            <div className="text-[#374151] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose space-y-4 sm:space-y-5">
              <p>
                Hey, I'm{" "}
                <span className="text-[#111827] font-bold">Rohan Singh</span>
                <InlineSticker
                  image={profilePic}
                  name="Rohan Singh"
                  tag="NiT'27 Builder"
                  rotate="-rotate-3"
                  target="home"
                  color="#F59E0B"
                  isAvatar={true}
                />
                —a full-stack builder and B.Tech CSE (AIML) student at{" "}
                <span className="text-[#111827] font-semibold">
                  Narula Institute of Technology (NiT'27)
                </span>.
              </p>

              <p>
                Whether it's founding{" "}
                <span className="text-[#F97316] font-bold">The MindMates</span>
                <InlineSticker
                  image={mindmatesLogo}
                  name="The MindMates"
                  tag="TiE Finalist AI"
                  rotate="-rotate-4"
                  target="projects"
                  color="#F97316"
                  fitContain={true}
                  bgClass="bg-white"
                />{" "}
                ecosystem (including{" "}
                <span className="text-[#3B82F6] font-bold">MindCareer</span>
                <InlineSticker
                  image={mindcareerLogo}
                  name="MindCareer"
                  tag="Career DNA & AI"
                  rotate="rotate-3"
                  target="projects"
                  color="#EA580C"
                  fitContain={true}
                  bgClass="bg-white"
                />{" "}
                and{" "}
                <span className="text-[#EC4899] font-bold">Sahchari</span>
                <InlineSticker
                  image={sahchariLogo}
                  name="Sahchari"
                  tag="FemTech AI"
                  rotate="-rotate-3"
                  target="projects"
                  color="#EC4899"
                  fitContain={true}
                  bgClass="bg-white"
                />
                ), engineering{" "}
                <span className="text-[#8B5CF6] font-bold">Provium</span>
                <InlineSticker
                  image={proviumLogo}
                  name="Provium"
                  tag="ZK Solvency DeFi"
                  rotate="rotate-4"
                  target="projects"
                  color="#0D9488"
                  fitContain={true}
                  bgClass="bg-white"
                />{" "}
                (Autonomous ZK compliance for DeFi), or delivering production features during my 7-month internship at{" "}
                <span className="text-[#111827] font-bold">Fortune Minds India LLP</span>
                <InlineSticker
                  image={fortunemindsImg}
                  name="Fortune Minds"
                  tag="7-Mo SDE Intern"
                  rotate="-rotate-2"
                  target="journey"
                  color="#DC2626"
                  fitContain={true}
                  bgClass="bg-black"
                />
                —I thrive on solving hard problems with code.
              </p>

              <p>
                I believe in learning by doing, failing fast, and iterating faster. That's why I've competed in{" "}
                <span className="text-[#111827] font-semibold">10+ hackathons</span>
                <InlineSticker
                  icon={<FaTrophy className="text-amber-300 text-[11px] sm:text-xs" />}
                  name="Hackathons"
                  tag="10+ Competitions"
                  rotate="rotate-3"
                  target="journey"
                  color="#F59E0B"
                  bgGradient="from-[#78350F] to-[#D97706]"
                />
                , built 25+ projects, and served as{" "}
                <span className="text-[#111827] font-semibold">Ex-Web Dev Associate at GDGoC NiT</span>
                <InlineSticker
                  image={gdgocImg}
                  name="GDGoC NiT"
                  tag="Web Associate"
                  rotate="-rotate-3"
                  target="community"
                  color="#4285F4"
                  fitContain={true}
                  bgClass="bg-white"
                />
                .
              </p>
              
              {/* Highlighted motto with doodle */}
              <div className="relative mt-4 sm:mt-6 p-3 sm:p-4 bg-[#FEF3C7]/30 border-l-4 border-[#F97316] rounded">
                <p className="text-[#F97316] font-semibold italic text-base sm:text-lg">
                  My motto? If you can imagine it, you can build it.
                </p>
                {/* Star doodle */}
                <span className="hidden sm:inline absolute -right-4 -top-2 text-2xl rotate-[15deg]">
                  
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do - Grid of smaller paper cards */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-handwritten font-bold text-[#1F2937] text-center mb-6 sm:mb-8">
            What I Do
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-md p-4 sm:p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
              >
                {/* Small pin */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#3B82F6] rounded-full shadow" />
                
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-sm border"
                    style={{ 
                      backgroundColor: `${skill.color}15`, 
                      color: skill.color,
                      borderColor: `${skill.color}35` 
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#111827] mb-1 sm:mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats - Stamp-like cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-handwritten font-bold text-[#1F2937] text-center mb-6 sm:mb-8">
            Quick Stats
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-[#FDF9F3] border-2 border-dashed border-[#E5D9C9] rounded-lg p-3.5 sm:p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.06, rotate: [-2, 2, -2, 0], borderColor: "#F97316" }}
              >
                {/* Stamp effect corners */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#E5D9C9]" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#E5D9C9]" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#E5D9C9]" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#E5D9C9]" />
                
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-[#F97316] flex justify-center">{stat.icon}</div>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-1 sm:mb-2 truncate">
                  {stat.number}
                </div>
                <div className="text-[11px] sm:text-xs text-[#4B5563] font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
