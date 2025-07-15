import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import PortfolioTape from "./components/tape"; // Imported PortfolioTape
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      {/* Hero Section with Overlaying PortfolioTape */}
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-[-40px] sm:bottom-[-60px] md:bottom-0 w-full z-10">
          <PortfolioTape /> {/* Overlayed */}
        </div>
      </div>

      <About />
      <TechStack />
      <Projects />
      <Contact className="relative z-20" /> {/* Ensure Contact is above the overlay */}

      {/* Floating Resume Download Modal */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center justify-end">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-float-modal text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-4-4m4 4l4-4" /></svg>
          <span className="font-semibold">Resume</span>
          <a
            href="/src/assets/resume.pdf"
            download
            className="bg-white text-indigo-600 font-bold px-3 py-1 rounded-full ml-1 shadow hover:bg-indigo-100 transition text-xs"
          >
            Download
          </a>
        </div>
      </div>
      <style>{`
        @keyframes float-modal {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-modal {
          animation: float-modal 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
