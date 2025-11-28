import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Paper Stack */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Paper Sheets */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-lg shadow-xl"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: index * -8,
                opacity: 1,
                rotate: index * 3,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              {/* Paper Lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-[1px] bg-[#94a3b8] mx-4"
                    style={{ marginTop: `${20 + i * 15}px` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-[#FDF9F3] mb-4 font-handwritten"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-[#1e293b] rounded-full overflow-hidden mx-auto border border-[#E5D9C9]/30">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3B82F6] via-[#F97316] to-[#22C55E] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.p
          className="mt-3 text-[#FDF9F3]/60 text-sm font-handwritten"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
