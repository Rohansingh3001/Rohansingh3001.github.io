import { motion } from "framer-motion";
import { FaBriefcase, FaRocket, FaGlobe, FaBolt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Fortune Minds India LLP",
    period: "Feb 2, 2026 – Sep 17, 2026",
    description: "Completed a 7-month engineering internship developing scalable web applications and high-performance production features.",
    achievements: [
      "Engineered full-stack features using modern web frameworks and RESTful APIs",
      "Optimized frontend rendering, responsive designs, and component architectures",
      "Collaborated in agile sprints with engineering teams to ship client deliverables",
      "Enhanced system reliability through comprehensive testing and bug resolution"
    ],
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    role: "Founder & Lead Developer",
    company: "The MindMates (Avrosa Technologies)",
    period: "2025 – Present",
    description: "Architecting and scaling AI-driven student wellness and lifestyle platforms including The MindMates, MindCareer, and Sahchari.",
    achievements: [
      "TiE Kolkata 2025 Finalist (won ₹10,000 prize grant)",
      "Built AI companion workflows with Python, Firebase, and Groq LLaMA models",
      "Architected multi-product ecosystem with modern React 19 and scalable databases",
      "Led cross-functional teams across product design, development, and community outreach"
    ],
    icon: <FaRocket />,
  },
  {
    id: 3,
    role: "Ex-Web Dev Associate",
    company: "GDG on Campus NiT (Google Developer Groups)",
    period: "2024 – 2025",
    description: "Led web development tracks and organized hands-on workshops for 400+ students at Narula Institute of Technology.",
    achievements: [
      "Conducted 10+ hands-on workshops on modern web technologies and React",
      "Mentored 400+ college peers in full-stack development",
      "Built community web platforms and facilitated developer bootcamps",
      "Coordinated hackathons and official Google Developer ecosystem events"
    ],
    icon: <FaGlobe />,
  },
  {
    id: 4,
    role: "Open Source Mentor & Hackathon Builder",
    company: "GSSoC & Tech Communities",
    period: "2023 – Present",
    description: "Mentoring contributors in open source and competing in hackathons building AI, Web3, and ZK solutions.",
    achievements: [
      "Mentored 50+ developers and reviewed 100+ pull requests in GSSoC",
      "Built Provium (Autonomous ZK Compliance) and The MindMates ecosystem",
      "Competed in 10+ hackathons with multiple podium finishes",
      "Facilitated developer growth through tech talks and community sessions"
    ],
    icon: <FaBolt />,
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
                  <div className="w-12 h-12 rounded-2xl bg-indigo-950/70 border border-indigo-700/60 flex items-center justify-center text-2xl text-indigo-300 shadow-inner flex-shrink-0">
                    {exp.icon}
                  </div>
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
            { number: "50+", label: "Mentees", icon: "" },
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