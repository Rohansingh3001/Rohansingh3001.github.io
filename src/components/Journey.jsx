import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaTrophy, FaCode } from "react-icons/fa";

const Journey = () => {
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started my CSE (AIML) journey at Narula Institute of Technology (NiT). Built my first web projects and discovered a true passion for software engineering.",
      icon: <FaLightbulb />,
      color: "#3B82F6",
      achievements: ["Enrolled NiT'27 CSE (AIML)", "First Web Apps"],
    },
    {
      year: "2024",
      title: "Building & Hackathons",
      description: "Participated in 10+ hackathons, building AI and full-stack solutions while mastering rapid engineering under pressure.",
      icon: <FaRocket />,
      color: "#F97316",
      achievements: ["10+ Hackathons", "Web3 & AI Prototypes"],
    },
    {
      year: "2025",
      title: "Founding & Leadership",
      description: "Founded The MindMates, became a TiE Kolkata Finalist (won ₹10k grant), and served as Web Dev Associate at GDGoC NiT mentoring 400+ students.",
      icon: <FaTrophy />,
      color: "#22C55E",
      achievements: ["TiE Kolkata Finalist", "Founded The MindMates", "GDGoC NiT Associate"],
    },
    {
      year: "2026",
      title: "Industry Internship & Ecosystem Scale",
      description: "Completed 7-month Software Development Internship at Fortune Minds India LLP (Feb–Sep 2026). Scaled The MindMates ecosystem with MindCareer and Sahchari, and built Provium (Autonomous ZK Compliance on Base Sepolia).",
      icon: <FaCode />,
      color: "#8B5CF6",
      achievements: ["Internship @ Fortune Minds", "Built MindCareer & Sahchari", "Provium ZK DeFi"],
    },
    {
      year: "Now",
      title: "Building the Future",
      description: "Advancing into production distributed systems, ZK proofs, and agentic AI. Graduating with B.Tech CSE (AIML) from NiT in 2027.",
      icon: <FaRocket />,
      color: "#EC4899",
      achievements: ["NiT'27 B.Tech AIML", "Ecosystem Expansion"],
    },
  ];

  return (
    <section
      id="journey"
      className="py-16 sm:py-20 px-3 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-3 sm:mb-6 font-handwritten break-words">
            My Journey
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-28 sm:w-32 bg-[#3B82F6]/60 rounded-full blur-[0.5px] rotate-[1deg]" />
          </div>
        </motion.div>

        {/* Lined Paper Card with Timeline */}
        <motion.div
          className="relative paper-lines bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-2xl sm:rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] px-3 py-6 sm:p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Tape effects on corners (desktop) */}
          <div className="hidden sm:block absolute -top-3 left-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-3deg]" />
          <div className="hidden sm:block absolute -top-3 right-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[3deg]" />
          
          {/* Red margin line (notebook look on tablet/desktop) */}
          <div className="hidden sm:block absolute left-14 md:left-16 top-0 bottom-0 w-0.5 bg-[#EF4444]/30" />

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-10 sm:ml-6 md:ml-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {/* Vertical timeline connector track connecting between badges */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[19px] sm:left-[39px] top-10 sm:top-16 bottom-[-24px] sm:bottom-[-40px] w-0.5 border-l-2 border-dashed border-[#CBD5E1]" />
                )}

                <div className="flex items-start gap-3 sm:gap-6">
                  {/* Year / Icon Badge */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-20 sm:h-20 rounded-xl border-2 border-[#E5D9C9] bg-white shadow-sm flex flex-col items-center justify-center"
                    style={{ borderColor: item.color }}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                  >
                    <div className="text-lg sm:text-2xl mb-0 sm:mb-1" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    {/* Year on Desktop */}
                    <div className="hidden sm:block text-xs font-bold text-[#111827]">{item.year}</div>
                  </motion.div>

                  {/* Milestone Content Card */}
                  <div className="flex-1 min-w-0 bg-white/70 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-[#E5D9C9]/70 shadow-xs sm:shadow-none">
                    {/* Header with year chip on mobile */}
                    <div className="flex items-center gap-2 mb-1 sm:mb-2 flex-wrap">
                      <span 
                        className="sm:hidden text-[11px] font-bold px-2 py-0.5 rounded-full inline-block"
                        style={{ backgroundColor: `${item.color}18`, color: item.color }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#111827] leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed mb-2.5 sm:mb-3">
                      {item.description}
                    </p>
                    
                    {/* Achievements as sticky note tags */}
                    {item.achievements && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#FEF3C7] border border-[#FACC15]/60 rounded text-[10px] sm:text-xs text-[#78350F] font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative doodle */}
          <div className="hidden sm:block absolute bottom-4 right-4 text-3xl opacity-30 rotate-[15deg]">
            ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
