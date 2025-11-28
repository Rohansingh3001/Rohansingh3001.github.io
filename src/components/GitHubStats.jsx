import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "Rohansingh3001";

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* GitHub Stats Card */}
      <div className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8">
        {/* Tape effect */}
        <div className="absolute -top-3 left-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-2deg]" />
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#111827] mb-6 font-handwritten flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub Activity
        </h3>

        {/* GitHub Stats Images */}
        <div className="space-y-4">
          {/* Stats Card */}
          <motion.div
            className="bg-white border-2 border-[#E5D9C9] rounded-lg p-2 shadow-sm overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&bg_color=FFFFFF&title_color=111827&text_color=4B5563&icon_color=F97316`}
              alt="GitHub Stats"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Streak Stats */}
          <motion.div
            className="bg-white border-2 border-[#E5D9C9] rounded-lg p-2 shadow-sm overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true&background=FFFFFF&ring=F97316&fire=F97316&currStreakLabel=111827`}
              alt="GitHub Streak"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="bg-white border-2 border-[#E5D9C9] rounded-lg p-2 shadow-sm overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true&bg_color=FFFFFF&title_color=111827&text_color=4B5563`}
              alt="Top Languages"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Link to GitHub Profile */}
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#111827] text-white rounded-lg font-semibold shadow-md hover:bg-[#1e293b] transition-colors"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Visit GitHub Profile →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GitHubStats;
