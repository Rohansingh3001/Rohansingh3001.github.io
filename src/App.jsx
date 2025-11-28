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
              transition: "left 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="w-full h-full bg-[#F97316] rounded-full opacity-60 shadow-lg" />
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
    </>
  );
}

export default App;
