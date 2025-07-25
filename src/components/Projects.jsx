import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import "aos/dist/aos.css";
import splitoimage from "../assets/Splito.png";
import web3buddyimage from "../assets/web3buddy.png";
import agrosaathiimage from "../assets/agrosaathi.png";

const projects = [
  {
    id: 1,
    title: "Splito",
    description:
      "A smart and intuitive app to split bills between friends, track expenses, and settle balances effortlessly.",
    image: splitoimage,
    year: "2024",
    company: "Solo Project",
	github: "https://github.com/Rohansingh3001/Splito",
    link: "https://splito-mocha.vercel.app/",
    
  },
  {
    id: 2,
    title: "Web3Buddy",
    description:
      "Your AI onboarding companion for learning Web3 through interactive quests and NFT badges.",
    image: web3buddyimage,
    year: "2025",
    company: "Team Project",
    github: "https://github.com/Rohansingh3001/Web3Buddy",
    link: "https://web3-buddy-chi.vercel.app/",
  },
  {
    id: 3,
    title: "Agrosaathi",
    description:
      "An AI-powered assistant for farmers offering crop disease detection, real-time market rates, and personalized government scheme suggestions.",
    image: agrosaathiimage,
    year: "2025",
    company: "Team Project",
    github: "https://github.com/Rohansingh3001/project-kisan",
    link: "https://agrosaathi2025.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) =>
        AOS.init({
          duration: 800,
          once: true,
          offset: 60,
        })
      );
    }
  }, []);

  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-indigo-950 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-4">
            💡 Featured Projects
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore my best work—crafted with passion, creativity, and modern tech.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation (Years) */}
          <div className="hidden md:flex flex-col gap-4 sticky top-28 min-w-[100px] text-indigo-300 font-semibold">
            {years.map((year) => (
              <Link
                key={year}
                to={`year-${year}`}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer hover:text-white transition"
              >
                {year}
              </Link>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="flex-1 flex flex-col gap-20">
            {years.map((year) => (
              <Element key={year} name={`year-${year}`}>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-300 mb-6">
                    {year}
                  </h3>
                  <div className="flex flex-col gap-12">
                    {projects
                      .filter((p) => p.year === year)
                      .map((project, idx) => (
                        <div
                          key={project.id}
                          className="group bg-gray-900 border border-white/10 rounded-3xl shadow-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-indigo-500/40 flex flex-col md:flex-row"
                          data-aos="fade-up"
                          data-aos-delay={idx * 100}
                        >
                          {/* Image */}
                          <div className="relative md:w-1/2 w-full aspect-video md:aspect-auto md:h-auto">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                            />
                            <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                              {project.company}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6 md:p-10 flex flex-col justify-between flex-1">
                            <div>
                              <h4 className="text-2xl md:text-3xl font-bold text-indigo-300 mb-3">
                                {project.title}
                              </h4>
                              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                            <div className="flex gap-4 mt-6 flex-wrap">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition text-sm"
                              >
                                <FaGithub /> GitHub
                              </a>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
                              >
                                <FaExternalLinkAlt /> Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </Element>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button
            onClick={() =>
              window.open("https://github.com/Rohansingh3001", "_blank")
            }
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:scale-105 transition"
          >
            See More Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
