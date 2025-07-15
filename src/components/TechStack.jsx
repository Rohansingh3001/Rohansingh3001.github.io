import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techStack = [
  { name: "HTML5", icon: "https://img.icons8.com/color/96/html-5--v1.png" },
  { name: "CSS3", icon: "https://img.icons8.com/color/96/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/96/javascript--v1.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/96/typescript.png" },
  { name: "React.js", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "React Native", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "Next.js", icon: "https://img.icons8.com/fluency/96/nextjs.png" },
  { name: "Vite", icon: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/tailwind_css.png" },
  { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  { name: "ShadCN/UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
  { name: "Express.js", icon: "https://img.icons8.com/ios/100/ffffff/express-js.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
  { name: "Firebase", icon: "https://img.icons8.com/color/96/firebase.png" },
  { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },
  { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
  { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
  { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black via-indigo-950 to-indigo-900 text-white flex justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-wide">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center w-full max-w-5xl mx-auto bg-gradient-to-br from-black via-indigo-950 to-indigo-900 border border-indigo-800 rounded-3xl p-8 shadow-2xl">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center text-sm"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain mb-2 drop-shadow-lg"
              />
              <p className="text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          🧠 Tech I work with daily – frontend, backend & ML!
        </p>
      </div>
    </section>
  );
};

export default TechStack;
