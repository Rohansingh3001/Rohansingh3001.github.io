import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import ecojunkImage from "../assets/ecojunk.png";
import farmerGoodsImage from "../assets/farmergoods.png";
import mentalHealthImage from "../assets/mental-health.png";

const projects = [
	{
		id: 1,
		title: "EcoJunk",
		description:
			"Revolutionizing e-waste management with smart pickup and tracking solutions.",
		image: ecojunkImage,
		year: "2024",
		company: "Solo Project",
		link: "https://e-waste-kq77.vercel.app/",
		github: "https://github.com/Rohansingh3001/E-WASTE",
	},
	{
		id: 2,
		title: "FarmerGoods",
		description:
			"Direct farm-to-door delivery marketplace cutting middlemen for fresh produce.",
		image: farmerGoodsImage,
		year: "2023",
		company: "Team Project",
		link: "https://farmers-goods.vercel.app/",
		github: "https://github.com/Rohansingh3001/farmers-goods",
	},
	{
		id: 3,
		title: "Mental Health",
		description:
			"A platform for AI-driven mental health journaling and therapist support.",
		image: mentalHealthImage,
		year: "2025",
		company: "The MindMates",
		link: "https://mental-helth.vercel.app/",
		github: "https://github.com/Rohansingh3001/mental-helth",
	},
];

const Projects = () => {
  useEffect(() => {
	if (typeof window !== "undefined") {
	  import("aos").then(AOS => {
		AOS.init({
		  duration: 800,
		  once: true,
		  offset: 60,
		});
	  });
	}
  }, []);
  return (
	<section
	  id="projects"
	  className="py-20 bg-gradient-to-br from-black via-indigo-950 to-indigo-900 text-white"
	>
	  <div className="container mx-auto px-2 sm:px-4">
		<div className="text-center mb-12">
		  <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-4">
			💡 Featured Projects
		  </h2>
		  <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
			Explore my best work—crafted with passion, creativity, and modern tech.
		  </p>
		</div>

		{/* Year-wise grouping */}
		{[...new Set(projects.map(p => p.year))].sort((a, b) => b - a).map(year => (
		  <div key={year} className="mb-10">
			<h3 className="text-2xl font-bold text-indigo-300 mb-6 text-left pl-2 sm:pl-0">{year}</h3>
			<div className="flex flex-col gap-8 sm:gap-12 w-full">
			  {projects.filter(p => p.year === year).map((project, idx, arr) => (
				<div
				  key={project.id}
				  className={`group bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-2 hover:shadow-indigo-500/30 w-full md:sticky`}
				  style={{ minHeight: '260px', top: `calc(4rem + ${idx * 60}px)`, zIndex: 10 + idx }}
				  data-aos="fade-up"
				  data-aos-delay={idx * 100}
				>
				  {/* Image section: full width on mobile, left side on desktop */}
				  <div className="relative w-full md:w-1/2 flex-shrink-0">
					<img
					  src={project.image}
					  alt={project.title}
					  className="w-full h-40 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none transition-transform group-hover:scale-105"
					/>
					<span className="absolute top-4 left-4 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
					  {project.company}
					</span>
				  </div>
				  {/* Content section: below image on mobile, right on desktop, full width for text */}
				  <div className="p-4 md:p-16 flex flex-col flex-1 justify-center w-full">
					<div className="flex flex-col justify-center h-full w-full">
					  <h4 className="text-xl md:text-4xl font-bold mb-4 text-indigo-300 w-full">
						{project.title}
					  </h4>
					  <p className="text-gray-300 mb-6 flex-1 text-sm md:text-xl w-full">
						{project.description}
					  </p>
					</div>
					<div className="flex gap-2 md:gap-8 mt-2 md:mt-8">
					  <a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-white text-black px-3 md:px-8 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition text-xs md:text-xl"
					  >
						<FaGithub /> GitHub
					  </a>
					  <a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-3 md:px-8 py-2 rounded-lg font-semibold transition text-xs md:text-xl"
					  >
						<FaExternalLinkAlt /> Live Demo
					  </a>
					</div>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		))}

		<div className="text-center mt-12 sm:mt-16">
		  <button
			onClick={() =>
			  window.open("https://github.com/Rohansingh3001", "_blank")
			}
			className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition"
		  >
			See More Projects →
		  </button>
		</div>
	  </div>
	</section>
	);
};

export default Projects;