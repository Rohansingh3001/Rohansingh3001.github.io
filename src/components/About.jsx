import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) =>
        AOS.init({ duration: 800, once: true, offset: 60 })
      );
    }
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* About Box */}
        <motion.div
          data-aos="fade-up"
          className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">👋 About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey, I'm <span className="text-indigo-300 font-semibold">Rohan Singh</span>, born in 2003 and raised in the energetic city of <span className="text-indigo-300 font-semibold">Kolkata</span>.
            <br /><br />
            My journey in tech started with curiosity and a strong desire to build solutions that matter. Today, I specialize as a{" "}
            <span className="text-indigo-300 font-semibold">full-stack developer</span> and explore the exciting world of{" "}
            <span className="text-indigo-300 font-semibold">machine learning</span>.
            <br /><br />
            I'm currently pursuing a <span className="text-indigo-300 font-semibold">B.Tech in Computer Science (AIML)</span> and continuously learning how to create tools and platforms that solve real-world problems — especially in mental health, Web3, and rural empowerment.
          </p>
        </motion.div>

        {/* Map Box */}
        <motion.div
          data-aos="fade-up"
          className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">🌍 My Location</h2>
          <div className="w-full h-[250px] rounded-xl overflow-hidden border border-gray-600">
            <MapContainer center={[22.5726, 88.3639]} zoom={13} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[22.5726, 88.3639]}
                icon={L.icon({
                  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                  iconSize: [40, 40],
                  iconAnchor: [20, 40],
                })}
              >
                <Popup>Kolkata, India</Popup>
              </Marker>
            </MapContainer>
          </div>
          <a
            href="https://www.google.com/maps?q=Kolkata,India"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-indigo-300 hover:text-white transition"
          >
            <FaMapMarkerAlt className="mr-2" /> View on Google Maps
          </a>
        </motion.div>

        {/* Hobbies Box */}
        <motion.div
          data-aos="fade-up"
          className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">🎨 Hobbies</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold text-indigo-300">📜 Shayari</h3>
              <p className="text-gray-300 italic mt-2">
                "ख़ुद को इतना भी ना बचाया करो, बारिश हुआ करे तो भीग जाया करो।"
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold text-indigo-300">📷 Photography</h3>
              <p className="text-gray-300 italic mt-2">
                "A single photograph can capture a lifetime of emotions."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Box */}
        <motion.div
          data-aos="fade-up"
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/70 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_15px_60px_rgba(99,102,241,0.15)] border border-indigo-500/20 hover:border-indigo-500 transition duration-300"
        >
          <h2 className="text-4xl font-extrabold text-indigo-400 mb-10 text-center tracking-wider">
            🎓 My Education
          </h2>

          <div className="flex flex-col gap-8">
            {/* High School */}
            <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-indigo-400/30 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">🎒 High School</h3>
              <p className="text-gray-300">Dreamland School, Kolkata</p>
              <p className="text-indigo-400 mt-2 font-medium">📜 Scored 81% in ICSE (Class 12)</p>
            </div>

            {/* B.Tech */}
            <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-purple-400/30 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-300 mb-1">💻 B.Tech in CSE (AIML)</h3>
              <p className="text-gray-300">Narula Institute of Technology</p>
              <p className="text-purple-400 mt-2 font-medium">🎓 Batch of 2027</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
