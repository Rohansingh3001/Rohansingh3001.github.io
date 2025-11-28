import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Journey from "./components/Journey";
import CommunityLeadership from "./components/CommunityLeadership";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
      <div className="relative min-h-screen">
          {/* Custom Cursor Effect */}
          <div
            className="fixed w-6 h-6 pointer-events-none z-[999] mix-blend-difference hidden md:block"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-full h-full bg-[#F97316] rounded-full opacity-60 shadow-lg" />
          </div>

          {/* Tech Icon Cursor */}
          <div
            className="custom-cursor-tech fixed w-12 h-12 pointer-events-none z-[1000] hidden md:block opacity-0"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.2s ease",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
            }}
          />

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
    </>
  );
}

export default App;
