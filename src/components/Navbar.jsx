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
      <nav
        className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full space-x-6 lg:space-x-8 transition-all duration-300 z-50 
        ${scrolling ? "bg-white/20 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-xl"} border border-white/30`}
      >
        {menuItems.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-semibold"
            className="cursor-pointer text-base lg:text-lg font-medium relative group text-white transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-4 left-4 right-4 px-4 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 z-50 
        ${scrolling ? "bg-white/20 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-xl"} border border-white/30`}
      >
        <span className="text-white font-bold text-lg">RS</span>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 z-40 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {menuItems.map((section, index) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="bg-blue-500/20 text-blue-400"
                  className="cursor-pointer text-lg font-medium text-white px-6 py-3 hover:bg-white/10 transition-colors"
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
