import { motion } from "framer-motion";
import profilePic from "../assets/Image.jpg";

const techStacks = [
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
  { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
  { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "Tailwind", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
];

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 py-10 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] text-white relative pt-28 sm:pt-24 space-y-10 lg:space-y-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* 👋 Left - Text */}
      <div className="text-center lg:text-left lg:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Hi, I'm Rohan Singh
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
          Full Stack Web Developer · ML Enthusiast · Creative Builder.
        </p>

        {/* 🚀 Tech Stack Icons */}
        <div className="grid grid-cols-5 gap-4 mt-6 place-items-center">
          {techStacks.map((tech, index) => (
            <motion.img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 hover:scale-110 transition duration-300 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
              }}
            />
          ))}
        </div>

        {/* 🔗 Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-md"
          >
            🚀 See My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-md"
          >
            🤝 Let’s Connect
          </a>
        </div>
      </div>

      {/* 🧠 Right - Profile Image */}
      <motion.div
        className="hidden sm:flex lg:w-1/2 flex-col items-center relative"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* 🔵 Blue Pulse Ring */}
        <motion.div
          className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-blue-700 blur-3xl opacity-20 animate-pulse"
        ></motion.div>

        {/* 🖼️ Image */}
        <img
          src={profilePic}
          alt="Rohan Singh"
          className="w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 rounded-full border-4 border-gray-300 shadow-xl z-10 object-cover"
        />

        {/* 💬 Open to Work */}
        <motion.div
          className="mt-6 text-center text-gray-300 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="bg-[#1e293b] px-4 py-2 rounded-lg shadow-md">
            💼 Open to Work — Let’s Build Together!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
