import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import mindmatesImg from "../assets/TheMindMates.jpg";
import proviumImg from "../assets/Provium.png";
import sahchariImg from "../assets/Sahchari.jpg";
import mindcareerImg from "../assets/MindCareer.jpg";
import splitoImg from "../assets/Splito.png";
import profilePic from "../assets/Image.jpg";

const chips = [
  {
    id: "mindmates",
    name: "The MindMates",
    category: "AI Mental Wellness",
    tag: "TiE Finalist",
    image: mindmatesImg,
    rotate: "-rotate-6",
    glowColor: "rgba(249, 115, 22, 0.5)",
    badgeColor: "text-orange-400",
    target: "projects",
    aspect: "aspect-[4/3]",
  },
  {
    id: "provium",
    name: "Provium",
    category: "ZK DeFi Protocol",
    tag: "Noir UltraHonk",
    image: proviumImg,
    rotate: "rotate-6",
    glowColor: "rgba(139, 92, 246, 0.55)",
    badgeColor: "text-purple-400",
    target: "projects",
    aspect: "aspect-[4/3]",
  },
  {
    id: "sahchari",
    name: "Sahchari",
    category: "FemTech AI Companion",
    tag: "Groq AI & Push",
    image: sahchariImg,
    rotate: "-rotate-4",
    glowColor: "rgba(236, 72, 153, 0.55)",
    badgeColor: "text-pink-400",
    target: "projects",
    aspect: "aspect-[4/3]",
  },
  {
    id: "mindcareer",
    name: "MindCareer",
    category: "AI Career Intelligence",
    tag: "Whisper STT",
    image: mindcareerImg,
    rotate: "rotate-5",
    glowColor: "rgba(59, 130, 246, 0.55)",
    badgeColor: "text-blue-400",
    target: "projects",
    aspect: "aspect-[4/3]",
  },
  {
    id: "splito",
    name: "Splito",
    category: "Expense & Split Engine",
    tag: "FinTech Web",
    image: splitoImg,
    rotate: "-rotate-5",
    glowColor: "rgba(16, 185, 129, 0.55)",
    badgeColor: "text-emerald-400",
    target: "projects",
    aspect: "aspect-square",
  },
  {
    id: "rohan",
    name: "Rohan Singh",
    category: "Full-Stack & ZK Architect",
    tag: "NiT'27 Builder",
    image: profilePic,
    rotate: "rotate-4",
    glowColor: "rgba(245, 158, 11, 0.55)",
    badgeColor: "text-amber-400",
    target: "about",
    aspect: "aspect-square",
  },
];

// Interactive Sticker Chip Component matching ElevenLabs aesthetic
const StickerTile = ({ chip }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={chip.target}
      smooth={true}
      duration={650}
      offset={-60}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex align-middle items-center justify-center mx-1 sm:mx-1.5 md:mx-2 relative group cursor-pointer select-none"
    >
      {/* Ambient colored backlight glow on hover */}
      <span
        className="absolute inset-0 rounded-2xl blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none -z-10 scale-125"
        style={{ backgroundColor: chip.glowColor }}
      />

      {/* Floating Micro Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-sans font-medium bg-[#0A0E17]/95 text-white border border-white/20 whitespace-nowrap pointer-events-none z-50 shadow-[0_10px_25px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-1.5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: chip.glowColor }}
            />
            <span className="font-semibold text-white">{chip.name}</span>
            <span className="text-white/40 font-mono">/</span>
            <span className={`text-[10px] font-mono ${chip.badgeColor}`}>
              {chip.tag}
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Sticker Frame */}
      <motion.div
        whileHover={{ scale: 1.22, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className={`relative ${chip.rotate} w-9 h-9 sm:w-14 sm:h-14 md:w-18 md:h-16 lg:w-22 lg:h-18 rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/20 group-hover:ring-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.8)] transition-shadow duration-300 bg-neutral-900 flex-shrink-0`}
      >
        <img
          src={chip.image}
          alt={chip.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Specular glass reflection sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none rounded-xl sm:rounded-2xl" />

        {/* Inner vignette ring for depth */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-black/20 pointer-events-none" />
      </motion.div>
    </Link>
  );
};

const ManifestoBanner = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-b from-[#0C101A] via-[#080B13] to-[#04060A] text-white rounded-3xl sm:rounded-[2.5rem] border border-white/10 ring-1 ring-inset ring-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.65)] px-4 py-10 sm:px-10 sm:py-16 md:px-14 md:py-20 overflow-hidden text-center"
        >
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-32 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-48 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Minimalist Tech Corner Registration Marks */}
          <span className="hidden sm:block absolute top-5 left-6 text-white/20 font-mono text-xs select-none">
            +
          </span>
          <span className="hidden sm:block absolute top-5 right-6 text-white/20 font-mono text-xs select-none">
            +
          </span>
          <span className="hidden sm:block absolute bottom-5 left-6 text-white/20 font-mono text-xs select-none">
            +
          </span>
          <span className="hidden sm:block absolute bottom-5 right-6 text-white/20 font-mono text-xs select-none">
            +
          </span>

          {/* Section Badge Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300 backdrop-blur-md mb-6 sm:mb-10 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-widest uppercase font-semibold text-neutral-200">
              CRAFT &amp; ARCHITECTURE
            </span>
            <span className="text-white/20">|</span>
            <span className="text-orange-400 font-medium">ROHANSINGH3001.ME</span>
          </div>

          {/* ElevenLabs-Style Inline Thumbnail Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.38] sm:leading-[1.32] md:leading-[1.28] max-w-5xl mx-auto">
            {/* Line 1 */}
            <span className="text-neutral-400 font-medium">Turning</span>{" "}
            <span className="text-white font-extrabold">visionary ideas</span>{" "}
            <span className="text-neutral-400 font-medium">into</span>{" "}
            {/* Clustered Sticker Pair: MindMates + Provium */}
            <span className="inline-flex items-center">
              <StickerTile chip={chips[0]} />
              <StickerTile chip={chips[1]} />
            </span>{" "}
            <span className="text-white font-extrabold">intelligent AI,</span>
            <br className="hidden md:inline" />{" "}
            {/* Line 2 */}
            <span className="text-neutral-400 font-medium">&amp;</span>{" "}
            {/* Clustered Sticker Pair: Sahchari + MindCareer */}
            <span className="inline-flex items-center">
              <StickerTile chip={chips[2]} />
              <StickerTile chip={chips[3]} />
            </span>{" "}
            <span className="text-white font-extrabold">ZK protocols</span>{" "}
            <span className="text-neutral-400 font-medium">that</span>{" "}
            {/* Clustered Sticker Pair: Splito + Rohan Avatar */}
            <span className="inline-flex items-center">
              <StickerTile chip={chips[4]} />
              <StickerTile chip={chips[5]} />
            </span>{" "}
            <span className="text-white font-extrabold">real people love.</span>
          </h2>

          {/* Bottom Interactive Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-neutral-300">
              <span className="text-orange-400">✦</span>
              <span>Tap or hover stickers to inspect architecture</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center text-[11px] text-neutral-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                4 Production Systems
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                Agentic AI &amp; Zero-Knowledge
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-emerald-400">
                100% Shipped
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoBanner;
