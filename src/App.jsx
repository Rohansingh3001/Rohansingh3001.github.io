import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Journey from "./components/Journey";
import CommunityLeadership from "./components/CommunityLeadership";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          {/* Custom Cursor Effect */}
          <div
            className="fixed w-6 h-6 pointer-events-none z-[999] mix-blend-difference hidden md:block"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: "translate(-50%, -50%)",
              transition: "all 0.1s ease-out",
            }}
          >
            <div className="w-full h-full bg-[#FDF9F3] rounded-full opacity-50" />
          </div>

          <Navbar />
          <HeroSection />
          <About />
          <Journey />
          <CommunityLeadership />
          <TechStack />
          <Projects />
          <Contact className="relative z-20" />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
