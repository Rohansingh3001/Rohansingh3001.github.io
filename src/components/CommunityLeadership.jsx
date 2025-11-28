import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaMicrophone, FaHandshake } from "react-icons/fa";

const CommunityLeadership = () => {
  const leadership = [
    {
      title: "GDGoC Web Dev Associate",
      organization: "Google Developer Groups on Campus NIT''25",
      description: "Leading web development initiatives, organizing workshops, and mentoring 400+ students in modern web technologies.",
      icon: <FaUsers />,
      color: "#3B82F6",
      stats: ["400+ Students", "Multiple Workshops", "Community Building"],
    },
    {
      title: "Hackathon Enthusiast",
      organization: "10+ Hackathons Participated",
      description: "Participated in 10+ hackathons including TiE Kolkata (Finalist), won ₹10k prize, and gained hands-on experience building under pressure.",
      icon: <FaTrophy />,
      color: "#F97316",
      stats: ["TiE Kolkata Finalist", "₹10k Prize Won", "15+ Projects Built"],
    },
    {
      title: "Tech Meetups & Sessions",
      organization: "ISF IETE Student Forum & GDGoC",
      description: "Organizing tech talks, conducting coding sessions, and building a vibrant community around technology and innovation through student forums.",
      icon: <FaMicrophone />,
      color: "#8B5CF6",
      stats: ["Monthly Meetups", "Tech Talks", "Community Building"],
    },
    {
      title: "Open Source Mentor",
      organization: "GSSoC & Community Projects",
      description: "Mentored 50+ developers in open source contributions, code reviews, and best practices for collaborative development.",
      icon: <FaHandshake />,
      color: "#22C55E",
      stats: ["50+ Mentees", "100+ PRs Reviewed", "Active Contributor"],
    },
  ];

  return (
    <section
      id="community"
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
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 font-handwritten">
            Community Leadership
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-40 bg-[#22C55E]/60 rounded-full blur-[0.5px]" />
          </div>
        </motion.div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Paper Card */}
              <motion.div
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8 h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Pin effect */}
                <div 
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-md" 
                  style={{ backgroundColor: item.color }}
                />
                
                {/* Icon with colored background */}
                <motion.div
                  className="inline-flex p-4 rounded-xl text-white text-4xl mb-6 shadow-md"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: item.color }}>
                  {item.organization}
                </p>
                <p className="text-[#4B5563] leading-relaxed mb-6 text-sm">
                  {item.description}
                </p>

                {/* Stats Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.stats.map((stat, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-white border-2 border-[#E5D9C9] rounded-full text-xs font-medium"
                      style={{ color: item.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, borderColor: item.color }}
                    >
                      {stat}
                    </motion.span>
                  ))}
                </div>

                {/* Hand-drawn accent line at bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                  style={{ backgroundColor: item.color, opacity: 0.3 }}
                />
                
                {/* Small doodle */}
                <div className="absolute bottom-3 right-3 text-lg opacity-20 rotate-[20deg]">
                  
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Paper Note */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative bg-[#DBEAFE] border-2 border-[#3B82F6]/40 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md" />
            
            <p className="text-lg text-[#1E3A8A] mb-4 font-handwritten text-center">
              Interested in collaboration or mentorship?
            </p>
            <div className="text-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-md"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let''s Connect 
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityLeadership;
