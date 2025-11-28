import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Web Dev Associate",
    company: "GDG on Campus NIT",
    period: "2025 - Present",
    description: "Leading web development initiatives and organizing tech sessions for 400+ students",
    achievements: [
      "Conducted 10+ tech workshops",
      "Mentored 400+ students in web development",
      "Built community web platform",
      "Organized Google Developer events"
    ],
    icon: "",
  },
  {
    id: 2,
    role: "Open Source Mentor",
    company: "GSSoC (GirlScript Summer of Code)",
    period: "2025",
    description: "Mentoring contributors in open source projects and code reviews",
    achievements: [
      "Mentored 50+ contributors",
      "Reviewed 100+ pull requests",
      "Guided project architecture",
      "Facilitated community growth"
    ],
    icon: "",
  },
  {
    id: 3,
    role: "Hackathon Enthusiast",
    company: "Multiple Platforms",
    period: "2023 - Present",
    description: "Participated in numerous hackathons and built innovative solutions",
    achievements: [
      "15+ hackathon participations",
      "Built AI/ML solutions",
      "Developed cross-platform applications",
      "Collaborated with diverse teams"
    ],
    icon: "",
  },
  {
    id: 4,
    role: "Community Builder",
    company: "Tech Communities",
    period: "2025 - Present",
    description: "Building and nurturing tech communities, conducting sessions for large audiences",
    achievements: [
      "Reached 400+ students",
      "Organized tech meetups",
      "Speaker at multiple events",
      "Built developer networks"
    ],
    icon: "",
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-24 px-6 sm:px-12 bg-gradient-to-br from-black via-indigo-950 to-indigo-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building communities, mentoring developers, and creating impact through technology
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-indigo-900/30 rounded-3xl p-8 border border-indigo-700/50 hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/50"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{exp.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 bg-indigo-950/50 px-4 py-2 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-base">{exp.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + achIndex * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-base">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {[
            { number: "400+", label: "Students Reached", icon: "" },
            { number: "10+", label: "Hackathons", icon: "" },
            { number: "100+", label: "PRs Reviewed", icon: "" },
            { number: "100+", label: "Mentees", icon: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-indigo-900/30 rounded-xl border border-indigo-700/50 hover:border-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/50"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.2 + index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;