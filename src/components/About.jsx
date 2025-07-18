import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const About = () => {
  const [step, setStep] = useState(0);
  const globeRef = useRef(null);

  const handleNext = () => setStep((prev) => (prev + 1) % 4);
  const handlePrev = () => setStep((prev) => (prev - 1 + 4) % 4);

  useEffect(() => {
    if (step === 2 && globeRef.current) {
      globeRef.current.pointOfView({ lat: 22.5726, lng: 88.3639, altitude: 2 }, 2000);
    }
  }, [step]);

  return (
    <motion.div
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-16 sm:pt-20 bg-gray-900 text-white text-center overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Tape */}
      <div className="absolute top-2 left-[-5%] w-[110%] h-8 bg-indigo-400 opacity-60 rotate-[-3deg] skew-x-12"></div>

      {/* Slide 1 - Personal Intro */}
      {step === 0 && (
        <motion.div
          key="about-me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-indigo-400 mb-4">My Story</h2>
          <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
            Hey, I'm <span className="text-indigo-300 font-semibold">Rohan Singh</span> — born in the vibrant city of
            <span className="text-indigo-300 font-semibold"> Kolkata</span> in 2003, and still deeply connected to its rhythm.
            <br /><br />
            My love for technology didn’t begin in a classroom. It sparked from a simple curiosity: "How do things on the internet work?"
            That question led me to building my first webpage… and I never looked back.
            <br /><br />
            Today, I'm pursuing a <span className="text-indigo-300 font-semibold">B.Tech in Computer Science (AIML)</span> and sharpening
            my skills as a <span className="text-indigo-300 font-semibold">full-stack web developer</span> and
            <span className="text-indigo-300 font-semibold"> machine learning enthusiast</span>. I’m driven by impact — building things that are beautiful, functional, and helpful.
          </p>

        </motion.div>
      )}

      {/* Slide 2 - Hobbies */}
      {step === 1 && (
        <motion.div
          key="hobbies"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-indigo-400 mb-4">More About Me</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            When I'm not coding, I love pouring emotions into{" "}
            <span className="text-indigo-300 font-semibold">shayari</span> and
            capturing life's quiet beauty through{" "}
            <span className="text-indigo-300 font-semibold">photography</span>.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold text-indigo-300">📜 Shayari</h3>
              <p className="text-gray-300 italic mt-2">"ख़ुद को इतना भी ना बचाया करो, बारिश हुआ करे तो भीग जाया करो।"</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold text-indigo-300">📷 Photography</h3>
              <p className="text-gray-300 italic mt-2">"A single photograph can capture a lifetime of emotions."</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Slide 3 - Location */}
      {step === 2 && (
        <motion.div
          key="location"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-indigo-400 mb-8 drop-shadow-lg">🌍 My Location</h2>
          <div className="relative w-full max-w-2xl h-[300px] sm:h-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-600">
            <MapContainer center={[22.5726, 88.3639]} zoom={13} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[22.5726, 88.3639]} icon={L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                iconSize: [40, 40],
                iconAnchor: [20, 40],
              })}>
                <Popup>Kolkata, India</Popup>
              </Marker>
            </MapContainer>
          </div>
          <a
            href="https://www.google.com/maps?q=Kolkata,India"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center bg-indigo-500 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-indigo-600 transition transform hover:scale-105"
          >
            <FaMapMarkerAlt className="mr-2" /> View on Google Maps
          </a>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          key="education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl text-center"
        >
          <h2 className="text-5xl font-extrabold text-indigo-400 mb-8 drop-shadow-lg">📚 My Learning Journey</h2>

          <div className="relative flex flex-col items-center">
            {/* Vertical timeline line */}
            <div className="absolute w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 left-1/2 transform -translate-x-1/2 animate-glow"></div>

            {/* Class 12 */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center mb-16 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-8 h-8 bg-indigo-500 border-4 border-white rounded-full absolute left-1/2 transform -translate-x-1/2 animate-pulse shadow-xl"></div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/70 backdrop-blur-xl text-left p-6 rounded-2xl shadow-2xl max-w-md ml-12 border border-indigo-400/50">
                <h3 className="text-2xl font-bold text-indigo-300">🎒 High School</h3>
                <p className="text-gray-300 mt-1">Dreamland School, Kolkata</p>
                <p className="text-indigo-400 mt-2 text-lg font-medium">📜 Scored 81% in Class 12 (ICSE)</p>
              </div>
            </motion.div>

            {/* B.Tech */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-8 h-8 bg-purple-500 border-4 border-white rounded-full absolute left-1/2 transform -translate-x-1/2 animate-pulse shadow-xl"></div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/70 backdrop-blur-xl text-left p-6 rounded-2xl shadow-2xl max-w-md mr-12 border border-purple-400/50">
                <h3 className="text-2xl font-bold text-indigo-300">💻 B.Tech in CSE (AIML)</h3>
                <p className="text-gray-300 mt-1">Narula Institute of Technology</p>
                <p className="text-indigo-400 mt-2 text-lg font-medium">🎓 Batch of 2027</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Navigation Controls */}
      <div className="w-full flex justify-center mt-8 mb-2 sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:gap-2 z-30">
        <button 
          onClick={handlePrev} 
          className="text-white bg-gray-700 p-2 sm:p-0.5 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition mx-1"
          aria-label="Previous"
        >
          <FaArrowLeft size={16} className="sm:size-10" />
        </button>
        <button 
          onClick={handleNext} 
          className="text-white bg-gray-700 p-2 sm:p-0.5 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition mx-1"
          aria-label="Next"
        >
          <FaArrowRight size={16} className="sm:size-10" />
        </button>
      </div>
    </motion.div>
  );
};

export default About;
