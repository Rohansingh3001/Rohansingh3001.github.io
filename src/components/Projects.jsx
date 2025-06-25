import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ecojunkImage from "../assets/ecojunk.png";
import farmerGoodsImage from "../assets/farmergoods.png";
import mentalHealthImage from "../assets/mental-health.png";

const projects = [
  {
    id: 1,
    title: "EcoJunk",
    description: "Revolutionizing e-waste management with smart pickup and tracking solutions.",
    image: ecojunkImage,
    year: "2024",
    company: "Solo Project",
    link: "https://e-waste-kq77.vercel.app/",
    github: "https://github.com/Rohansingh3001/E-WASTE",
  },
  {
    id: 2,
    title: "FarmerGoods",
    description: "Direct farm-to-door delivery marketplace cutting middlemen for fresh produce.",
    image: farmerGoodsImage,
    year: "2023",
    company: "Team Project",
    link: "https://farmers-goods.vercel.app/",
    github: "https://github.com/Rohansingh3001/farmers-goods",
  },
  {
    id: 3,
    title: "Mental Health",
    description: "A platform for AI-driven mental health journaling and therapist support.",
    image: mentalHealthImage,
    year: "2025",
    company: "The MindMates",
    link: "https://mental-helth.vercel.app/",
    github: "https://github.com/Rohansingh3001/mental-helth",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold text-indigo-400">💡 Featured Projects</h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Scroll to watch projects come alive, stacking one over the other.
          </p>
        </div>

        <div className="relative h-[2500px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-24"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-12 lg:flex lg:items-center lg:gap-12 mx-auto max-w-6xl">
                {/* Text Section */}
                <div className="lg:w-1/2">
                  <p className="uppercase text-sm text-indigo-400 font-semibold mb-2">
                    {project.company} • {project.year}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl border-2 border-white/10 object-cover w-full h-[260px] lg:h-[300px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-40">
          <button
            onClick={() => window.open("https://github.com/Rohansingh3001", "_blank")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            See More Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;