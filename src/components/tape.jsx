import { Fragment } from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "AI Integration",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Open Source",
  "UI/UX Design",
];

export const PortfolioTape = () => {
  return (
    <div className="py-8 lg:py-12 overflow-hidden bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 py-3 -rotate-3 relative">
        <motion.div
          className="flex w-max gap-4 whitespace-nowrap animate-scroll"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {[...Array(4)].flatMap((_, i) =>
            skills.map((skill, index) => (
              <div
                key={`${skill}-${i}-${index}`}
                className="inline-flex items-center gap-4 px-4"
              >
                <span className="text-white font-extrabold uppercase text-sm">
                  {skill}
                </span>
                <span className="text-white text-lg">★</span>
              </div>
            ))
          )}
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioTape;
