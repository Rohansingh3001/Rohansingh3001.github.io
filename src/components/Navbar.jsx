import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initialize scrollSpy to detect the active section
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const menuItems = ["home", "about", "journey", "community", "techstack", "projects", "contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 px-8 py-3 rounded-full space-x-6 lg:space-x-8 transition-all duration-300 z-50 
        ${scrolling ? "bg-[#FDF9F3]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[#E5D9C9]" : "bg-[#FDF9F3]/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)]"} border-2`}
      >
        {menuItems.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={800}
            spy={true}
            offset={-80}
            activeClass="text-[#F97316] font-bold scale-110"
            className="cursor-pointer text-sm lg:text-base font-medium relative group text-[#1F2937] hover:text-[#F97316] transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] rounded-full transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`md:hidden fixed top-4 left-4 right-4 px-4 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 z-50 
        ${scrolling ? "bg-[#FDF9F3]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[#E5D9C9]" : "bg-[#FDF9F3]/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)]"} border-2`}
      >
        <span className="text-[#1F2937] font-bold text-lg font-handwritten">Rohan Singh</span>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#1F2937] p-2 rounded-lg hover:bg-[#F97316]/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-4 right-4 bg-[#FDF9F3]/95 backdrop-blur-md rounded-2xl border-2 border-[#E5D9C9] shadow-[0_8px_30px_rgba(0,0,0,0.15)] z-40 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {menuItems.map((section, index) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  activeClass="bg-[#F97316]/10 text-[#F97316] border-l-4 border-[#F97316]"
                  className="cursor-pointer text-lg font-medium text-[#1F2937] px-6 py-3 hover:bg-[#F97316]/5 transition-colors border-l-4 border-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
