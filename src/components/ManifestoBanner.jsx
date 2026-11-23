import { motion } from "framer-motion";
import { Link } from "react-scroll";
import mindmatesImg from "../assets/TheMindMates.jpg";
import proviumImg from "../assets/Provium.png";
import sahchariImg from "../assets/Sahchari.jpg";
import mindcareerImg from "../assets/MindCareer.jpg";
import profilePic from "../assets/Image.jpg";

const ManifestoBanner = () => {
  const chips = [
    {
      name: "The MindMates",
      tag: "TiE Finalist",
      image: mindmatesImg,
      rotate: "-rotate-2",
      borderColor: "#F97316",
    },
    {
      name: "Provium",
      tag: "ZK DeFi",
      image: proviumImg,
      rotate: "rotate-2",
      borderColor: "#8B5CF6",
    },
    {
      name: "Sahchari",
      tag: "FemTech AI",
      image: sahchariImg,
      rotate: "-rotate-1",
      borderColor: "#EC4899",
    },
    {
      name: "MindCareer",
      tag: "EdTech AI",
      image: mindcareerImg,
      rotate: "rotate-3",
      borderColor: "#3B82F6",
    },
    {
      name: "Rohan Singh",
      tag: "NiT'27 Builder",
      image: profilePic,
      rotate: "-rotate-2",
      borderColor: "#10B981",
    },
  ];

  return (
    <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0F172A] text-white rounded-2xl sm:rounded-3xl border-2 border-[#1E293B] shadow-[0_24px_60px_rgba(15,23,42,0.45)] px-4 py-8 sm:p-12 md:p-16 overflow-hidden text-center"
        >
          {/* Scrapbook Tape effect on corners */}
          <div className="hidden sm:block absolute -top-3 left-14 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[-3deg]" />
          <div className="hidden sm:block absolute -top-3 right-14 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[3deg]" />

          {/* Background subtle noise and glow */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-white/10 border border-white/15 text-orange-300 mb-5 sm:mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span>FULL-STACK • AGENTIC AI • ZERO-KNOWLEDGE</span>
          </div>

          {/* ElevenLabs-Style Inline Thumbnail Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.4] sm:leading-[1.38] md:leading-[1.35] max-w-5xl mx-auto">
            <span className="text-neutral-400">Turning</span>{" "}
            <span className="inline-block hover:rotate-12 transition-transform cursor-default">💡</span>{" "}
            <span className="text-white">ideas into</span>{" "}
            {/* The MindMates Chip */}
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-50}
              className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 relative group cursor-pointer"
            >
              <span className={`inline-block w-10 h-7 sm:w-16 sm:h-11 md:w-20 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border-2 shadow-md ${chips[0].rotate} group-hover:scale-115 group-hover:rotate-0 transition-all duration-300`}
                style={{ borderColor: chips[0].borderColor }}
              >
                <img
                  src={chips[0].image}
                  alt={chips[0].name}
                  className="w-full h-full object-cover object-top"
                />
              </span>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/90 text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                {chips[0].name}
              </span>
            </Link>{" "}
            <span className="text-white">intelligent AI,</span>{" "}
            {/* Provium Chip */}
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-50}
              className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 relative group cursor-pointer"
            >
              <span className={`inline-block w-10 h-7 sm:w-16 sm:h-11 md:w-20 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border-2 shadow-md ${chips[1].rotate} group-hover:scale-115 group-hover:rotate-0 transition-all duration-300`}
                style={{ borderColor: chips[1].borderColor }}
              >
                <img
                  src={chips[1].image}
                  alt={chips[1].name}
                  className="w-full h-full object-cover object-top"
                />
              </span>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/90 text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                {chips[1].name} • ZK
              </span>
            </Link>{" "}
            <span className="text-neutral-400">ZK systems,</span>{" "}
            <br className="hidden sm:inline" />
            <span className="text-neutral-400">&amp;</span>{" "}
            {/* Sahchari Chip */}
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-50}
              className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 relative group cursor-pointer"
            >
              <span className={`inline-block w-10 h-7 sm:w-16 sm:h-11 md:w-20 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border-2 shadow-md ${chips[2].rotate} group-hover:scale-115 group-hover:rotate-0 transition-all duration-300`}
                style={{ borderColor: chips[2].borderColor }}
              >
                <img
                  src={chips[2].image}
                  alt={chips[2].name}
                  className="w-full h-full object-cover object-top"
                />
              </span>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/90 text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                {chips[2].name}
              </span>
            </Link>{" "}
            {/* MindCareer Chip */}
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-50}
              className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 relative group cursor-pointer"
            >
              <span className={`inline-block w-10 h-7 sm:w-16 sm:h-11 md:w-20 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border-2 shadow-md ${chips[3].rotate} group-hover:scale-115 group-hover:rotate-0 transition-all duration-300`}
                style={{ borderColor: chips[3].borderColor }}
              >
                <img
                  src={chips[3].image}
                  alt={chips[3].name}
                  className="w-full h-full object-cover object-top"
                />
              </span>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/90 text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                {chips[3].name}
              </span>
            </Link>{" "}
            <span className="text-white">products that</span>{" "}
            {/* Rohan Avatar Chip */}
            <span className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 relative group">
              <span className={`inline-block w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden border-2 shadow-md ${chips[4].rotate} group-hover:scale-115 group-hover:rotate-0 transition-all duration-300`}
                style={{ borderColor: chips[4].borderColor }}
              >
                <img
                  src={chips[4].image}
                  alt={chips[4].name}
                  className="w-full h-full object-cover"
                />
              </span>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/90 text-white border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                Rohan Singh
              </span>
            </span>{" "}
            <span className="text-white">real people use.</span>
          </h2>

          {/* Subtitle / Interactive note */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400 font-handwritten">
            <span>✦ Tap any sticker to jump straight to the project ✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoBanner;
