import { motion } from "framer-motion";
import { FaRocket, FaCode, FaBrain, FaUsers } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "20+", label: "Projects Shipped", icon: <FaCode /> },
    { number: "10+", label: "Hackathons", icon: <FaRocket /> },
    { number: "1", label: "Startup Founded", icon: <FaBrain /> },
    { number: "GDGoC", label: "Web Dev Associate", icon: <FaUsers /> },
  ];

  const skills = [
    { title: "AI/ML Solutions", description: "Building intelligent apps with Gemini API, OCR, and NLP workflows.", emoji: "" },
    { title: "Full-Stack Development", description: "Crafting scalable web apps with React, Node.js, Firebase, and MongoDB.", emoji: "" },
    { title: "Rapid Prototyping", description: "Turning ideas into working MVPs quickly—ideal for hackathons.", emoji: "" },
    { title: "Community Leadership", description: "Leading tech initiatives, mentoring developers, organizing meetups.", emoji: "" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with handwritten label */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 font-handwritten">
            About Me
          </h2>
          
          {/* Hand-drawn underline */}
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-[#F97316]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />
          </div>
        </motion.div>

        {/* Who I Am - Main Paper Card */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8 sm:p-12">
            {/* Tape effect */}
            <div className="absolute -top-3 left-16 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[2deg]" />
            
            {/* Hand-drawn arrow pointing to heading */}
            <div className="absolute -left-8 top-8 text-2xl rotate-[180deg] opacity-60">
              
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-6 font-handwritten">
               Who I Am
            </h3>
            
            <div className="text-[#4B5563] text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Hey, I''m <span className="text-[#1F2933] font-semibold">Rohan Singh</span>—a builder at heart. I don''t just write code; I ship products that solve real problems.
              </p>
              <p>
                Whether it''s founding{" "}
                <span className="text-[#F97316] font-semibold">The MindMates</span> to help students with mental wellness, building{" "}
                <span className="text-[#3B82F6] font-semibold">Web3Buddy</span> platform, creating{" "}
                <span className="text-[#8B5CF6] font-semibold">AI-powered tools</span> that actually work—I thrive on turning ideas into reality.
              </p>
              <p>
                I believe in learning by doing, failing fast, and iterating faster. That''s why I''ve participated in 10+ hackathons, built 20+ projects, and now serve as{" "}
                <span className="text-[#1F2933] font-semibold">Web Dev Associate at GDGoC NIT''25</span>.
              </p>
              
              {/* Highlighted motto with doodle */}
              <div className="relative mt-6 p-4 bg-[#FEF3C7]/30 border-l-4 border-[#F97316] rounded">
                <p className="text-[#F97316] font-semibold italic text-lg">
                  My motto? If you can imagine it, you can build it.
                </p>
                {/* Star doodle */}
                <span className="absolute -right-4 -top-2 text-2xl rotate-[15deg]">
                  
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do - Grid of smaller paper cards */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-handwritten text-[#FDF9F3] text-center mb-8">
             What I Do
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-md p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
              >
                {/* Small pin */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#3B82F6] rounded-full shadow" />
                
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{skill.emoji}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#111827] mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-[#4B5563] text-sm leading-relaxed">
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
          <h3 className="text-2xl font-handwritten text-[#FDF9F3] text-center mb-8">
             Quick Stats
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-[#FDF9F3] border-2 border-dashed border-[#E5D9C9] rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0], borderColor: "#F97316" }}
              >
                {/* Stamp effect corners */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#E5D9C9]" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#E5D9C9]" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#E5D9C9]" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#E5D9C9]" />
                
                <div className="text-3xl mb-3 text-[#F97316]">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#111827] mb-2">
                  {stat.number}
                </div>
                <div className="text-xs text-[#4B5563] font-medium">
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
