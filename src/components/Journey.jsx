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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 font-handwritten">
            My Journey
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-[#3B82F6]/60 rounded-full blur-[0.5px] rotate-[1deg]" />
          </div>
        </motion.div>

        {/* Lined Paper Card with Timeline */}
        <motion.div
          className="relative paper-lines bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8 sm:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tape effects on corners */}
          <div className="absolute -top-3 left-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-3deg]" />
          <div className="absolute -top-3 right-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[3deg]" />
          
          {/* Red margin line (like notebook paper) */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-[#EF4444]/30" />

          {/* Timeline Items */}
          <div className="space-y-12 ml-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  {/* Year Badge with icon */}
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-xl border-2 border-[#E5D9C9] bg-white shadow-md flex flex-col items-center justify-center"
                    style={{ borderColor: item.color }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <div className="text-2xl mb-1" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-[#111827]">{item.year}</div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    {/* Achievements as sticky note tags */}
                    {item.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#FEF3C7] border border-[#FACC15]/60 rounded text-xs text-[#78350F] font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hand-drawn connector arrow */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-10 -bottom-6 text-2xl opacity-40 rotate-90">
                    
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom right doodle */}
          <div className="absolute bottom-4 right-4 text-3xl opacity-30 rotate-[15deg]">
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
