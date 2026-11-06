import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaUsers, FaTrophy, FaMicrophone, FaHandshake } from "react-icons/fa";

const CommunityLeadership = () => {
  const leadership = [
    {
      title: "Ex-Web Dev Associate @ GDGoC",
      organization: "Google Developer Groups on Campus NiT",
      description: "Led web development initiatives, organized workshops, and mentored 400+ students in modern web technologies.",
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
      className="py-16 sm:py-20 px-3 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-3 sm:mb-6 font-handwritten break-words">
            Community Leadership
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 sm:w-40 bg-[#22C55E]/60 rounded-full blur-[0.5px]" />
          </div>
        </motion.div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Paper Card */}
              <motion.div
                className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.2)] sm:shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-4 sm:p-7 md:p-8 h-full overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Pin effect */}
                <div 
                  className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full shadow-md" 
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  {/* Icon & Title Header Row */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl text-white text-xl sm:text-3xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#111827] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold truncate mt-0.5" style={{ color: item.color }}>
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#4B5563] leading-relaxed mb-4 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Stats Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-[#E5D9C9]/50">
                  {item.stats.map((stat, i) => (
                    <motion.span
                      key={i}
                      className="px-2.5 py-1 bg-white border border-[#E5D9C9] rounded-full text-[11px] sm:text-xs font-semibold shadow-xs"
                      style={{ color: item.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      whileHover={{ scale: 1.08, borderColor: item.color }}
                    >
                      {stat}
                    </motion.span>
                  ))}
                </div>

                {/* Accent line at bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: item.color, opacity: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Paper Note */}
        <motion.div
          className="mt-8 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative bg-[#DBEAFE] border-2 border-[#3B82F6]/40 rounded-2xl shadow-lg p-5 sm:p-8 max-w-2xl mx-auto text-center">
            {/* Tape effect on desktop */}
            <div className="hidden sm:block absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md" />
            
            <p className="text-base sm:text-2xl text-[#1E3A8A] mb-2 sm:mb-3 font-handwritten font-bold">
              Interested in collaboration or mentorship?
            </p>
            <p className="text-xs sm:text-sm text-[#1E3A8A]/80 mb-4 max-w-md mx-auto leading-relaxed">
              Always open to discussing new projects, tech talks, hackathons, and open source opportunities.
            </p>
            <div>
              <Link
                to="contact"
                smooth={true}
                duration={700}
                offset={-50}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg font-semibold shadow-md w-full sm:w-auto text-sm sm:text-base transition-colors"
              >
                Let's Connect →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityLeadership;
