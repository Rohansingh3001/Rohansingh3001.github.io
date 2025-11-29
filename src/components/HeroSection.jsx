import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import profilePic from "../assets/Image.jpg";

const HeroSection = () => {
  const badges = [
    { label: "Founder", detail: "The MindMates" },
    { label: "GDGoC ''25", detail: "Web Dev Associate" },
    { label: "Hackathon Finalist", detail: "TiE Kolkata" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 pt-32 md:pt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Paper Card - Hero Content / ID Card on Mobile */}
          <motion.div
            className="lg:col-span-8 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile: ID Card Layout, Desktop: Paper Card */}
            <div className="relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] px-8 py-10 sm:p-12">
              {/* ID Card Header Strip (Mobile only) */}
              <div className="block lg:hidden absolute top-0 left-0 right-0 h-16 bg-[#F97316] rounded-t-xl">
                <div className="absolute top-3 left-4 text-white font-bold text-sm">DEVELOPER ID</div>
                <div className="absolute top-3 right-4 text-white font-bold text-xs">NIT'25</div>
                {/* Lanyard Hole */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#E5D9C9] rounded-sm border border-[#D4C5B0]"></div>
              </div>
              
              {/* ID Card with Photo (Mobile) */}
              <div className="block lg:hidden mt-8 mb-6">
                <div className="flex items-start gap-4">
                  {/* Profile Photo */}
                  <img
                    src={profilePic}
                    alt="Rohan Singh"
                    className="w-24 h-24 object-cover rounded-lg border-4 border-white shadow-lg"
                  />
                  {/* Info */}
                  <div className="flex-1 space-y-1 pt-1">
                    <div className="text-xs text-[#6B7280]">ID: RS-2025</div>
                    <h1 className="text-2xl font-bold text-[#111827] font-handwritten leading-tight">Rohan Singh</h1>
                    <p className="text-sm text-[#F97316] font-semibold">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Tape Effect - Desktop only */}
              <div className="hidden lg:block absolute -top-3 left-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-2deg]" />
              
              <div className="hidden lg:block absolute -top-3 right-12 h-6 w-20 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[3deg]" />

              {/* Hand-drawn underline accent */}
              <div className="absolute top-16 left-8 h-1 w-32 bg-[#F97316]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />

              {/* Content */}
              <div className="space-y-6">
                {/* Name with handwritten font - Desktop only */}
                <div className="hidden lg:block">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] font-handwritten mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Rohan Singh
                  </motion.h1>
                  
                  {/* Small doodle arrow */}
                  <span className="absolute top-12 right-8 text-2xl rotate-[15deg] opacity-70">
                    
                  </span>
                </div>
                
                {/* ID Card Info Section (Mobile) */}
                <div className="block lg:hidden space-y-3 pb-4 border-b-2 border-dashed border-[#E5D9C9]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Organization:</span>
                    <span className="font-semibold text-[#111827]">GDGoC NIT'25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Role:</span>
                    <span className="font-semibold text-[#111827]">Web Dev Associate</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Founded:</span>
                    <span className="font-semibold text-[#111827]">The MindMates</span>
                  </div>
                </div>

                {/* Tagline */}
                <motion.p
                  className="text-lg sm:text-xl text-[#1F2933] font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I build <span className="text-[#F97316] font-semibold">AI</span>,{" "}
                  <span className="text-[#3B82F6] font-semibold">Web</span> &{" "}
                  <span className="text-[#22C55E] font-semibold">Community-driven</span> products.
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-base text-[#4B5563] leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Founder of <span className="font-semibold text-[#1F2933]">The MindMates</span>, 
                  Web Dev Associate @ <span className="font-semibold text-[#1F2933]">GDGoC''25</span>, 
                  and full-stack builder who loves turning ideas into reality.
                </motion.p>

                {/* Badges with hand-drawn circles - Desktop only */}
                <motion.div
                  className="hidden lg:flex flex-wrap gap-3 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {badges.map((badge, index) => (
                    <motion.div
                      key={index}
                      className="relative px-4 py-2 bg-white border-2 border-[#E5D9C9] rounded-lg shadow-sm"
                      whileHover={{ y: -3, rotate: -1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Hand-drawn circle around badge */}
                      <svg
                        className="absolute -inset-1 w-full h-full opacity-40"
                        viewBox="0 0 100 50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="50"
                          cy="25"
                          rx="48"
                          ry="22"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="1.5"
                          strokeDasharray="3,2"
                          transform="rotate(-2 50 25)"
                        />
                      </svg>
                      <div className="relative z-10">
                        <p className="text-xs text-[#4B5563] font-medium">{badge.label}</p>
                        <p className="text-sm font-semibold text-[#1F2933]">{badge.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link to="projects" smooth={true} duration={500}>
                    <motion.button
                      className="w-full sm:w-auto px-8 py-3 bg-[#F97316] text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Projects 
                    </motion.button>
                  </Link>

                  <motion.a
                    href="/src/assets/Rohan_Resume%20(3).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-[#E5D9C9] text-[#1F2933] rounded-lg font-semibold hover:bg-[#FDF9F3] transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload />
                    Resume
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex gap-4 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.a
                    href="https://github.com/Rohansingh3001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border-2 border-[#E5D9C9] rounded-lg hover:bg-[#FDF9F3] transition-all"
                    whileHover={{ y: -2, rotate: -3 }}
                  >
                    <FaGithub className="text-xl text-[#1F2933]" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rohan-singh-033748243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border-2 border-[#E5D9C9] rounded-lg hover:bg-[#FDF9F3] transition-all"
                    whileHover={{ y: -2, rotate: 3 }}
                  >
                    <FaLinkedin className="text-xl text-[#3B82F6]" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile + Sticky Notes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Image Card - Hidden on Mobile */}
            <motion.div
              className="hidden lg:block relative bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_12px_30px_rgba(15,23,42,0.25)] p-6"
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -6, rotate: -1 }}
            >
              {/* Pin effect */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F97316] rounded-full shadow-md" />
              
              <img
                src={profilePic}
                alt="Rohan Singh"
                className="w-full h-auto object-cover rounded-lg border-2 border-[#E5D9C9]"
              />
              
              {/* Small handwritten note */}
              <p className="mt-3 text-center text-sm font-handwritten text-[#4B5563]">
                hey there! 
              </p>
            </motion.div>

            {/* Sticky Note - Currently Working */}
            <motion.div
              className="relative bg-[#FEF3C7] border-2 border-[#FACC15]/60 rounded-lg shadow-lg px-5 py-4 rotate-[-2deg]"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              {/* Tape on sticky note */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-16 bg-[#E5E7EB]/90 rounded-sm shadow-sm" />
              
              <p className="text-xs font-handwritten font-bold text-[#78350F] mb-2">
                Currently:
              </p>
              <ul className="text-xs font-medium text-[#78350F] space-y-1">
                <li>– Building The MindMates </li>
                <li>– GDGoC Web Dev Associate</li>
                <li>– 10+ Hackathons participated</li>
              </ul>
              
              {/* Small doodle */}
              <div className="absolute bottom-2 right-2 text-lg opacity-50">
                
              </div>
            </motion.div>

            {/* Tech Stack Sticky Note */}
            <motion.div
              className="relative bg-[#DBEAFE] border-2 border-[#3B82F6]/40 rounded-lg shadow-lg px-5 py-4 rotate-[1deg]"
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
              whileHover={{ rotate: -1, scale: 1.05 }}
            >
              <p className="text-xs font-handwritten font-bold text-[#1E3A8A] mb-2">
                Tech Stack:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Firebase", "AI/ML", "Aptos", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/70 border border-[#3B82F6]/30 rounded text-[#1E3A8A] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
