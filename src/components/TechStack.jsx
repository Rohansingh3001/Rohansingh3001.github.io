import { motion } from "framer-motion";

const techStackCategories = [
  {
    category: "Frontend",
    color: "#3B82F6",
    technologies: [
      { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
      { name: "Tailwind", icon: "https://img.icons8.com/color/96/tailwind_css.png" },
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "ShadCN/UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
    ],
  },
  {
    category: "Backend",
    color: "#F97316",
    technologies: [
      { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },
      { name: "Firebase", icon: "https://img.icons8.com/color/96/firebase.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
    ],
  },
  {
    category: "AI/ML",
    color: "#8B5CF6",
    technologies: [
      { name: "Gemini API", icon: "https://img.icons8.com/color/96/google-logo.png" },
      { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
      { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
      { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    ],
  },
  {
    category: "Blockchain",
    color: "#22C55E",
    technologies: [
      { name: "Aptos Move", icon: "https://cryptologos.cc/logos/aptos-apt-logo.png" },
      { name: "Ethereum", icon: "https://img.icons8.com/color/96/ethereum.png" },
      { name: "Web3.js", icon: "https://img.icons8.com/color/96/ethereum.png" },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
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
          <span className="inline-block px-4 py-1 bg-[#DBEAFE] border-2 border-[#3B82F6]/40 rounded-full text-sm font-handwritten text-[#1E3A8A] mb-4">
            my toolbox
          </span>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 font-handwritten">
            Tech Stack
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-[#8B5CF6]/60 rounded-full blur-[0.5px]" />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {techStackCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              {/* Category Paper Card */}
              <div className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8">
                {/* Tape effect */}
                <div className="absolute -top-3 left-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-2deg]" />
                
                {/* Category Header with hand-drawn line */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="h-1 flex-1 rounded-full"
                    style={{ backgroundColor: category.color, opacity: 0.4 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                  />
                  <h3 
                    className="text-2xl sm:text-3xl font-bold whitespace-nowrap"
                    style={{ color: category.color, fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {category.category}
                  </h3>
                  <motion.div
                    className="h-1 flex-1 rounded-full"
                    style={{ backgroundColor: category.color, opacity: 0.4 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                  />
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="relative bg-white border-2 border-[#E5D9C9] rounded-lg p-4 flex flex-col items-center gap-3 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.2 + index * 0.1,
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        borderColor: category.color
                      }}
                    >
                      {/* Small pin on top */}
                      <div 
                        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full shadow"
                        style={{ backgroundColor: category.color }}
                      />
                      
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain drop-shadow-md"
                      />
                      <p className="text-xs sm:text-sm font-semibold text-[#111827] text-center leading-tight">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#FDF9F3]/60 text-sm font-handwritten">
             Tech I work with daily – frontend, backend, AI/ML & blockchain!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
