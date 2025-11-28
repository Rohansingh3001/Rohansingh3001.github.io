import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/rohan_30.01/", icon: <FaInstagram />, label: "Instagram", color: "#F97316" },
    { href: "https://www.linkedin.com/in/rohan-singh-033748243/", icon: <FaLinkedin />, label: "LinkedIn", color: "#3B82F6" },
    { href: "https://github.com/Rohansingh3001", icon: <FaGithub />, label: "GitHub", color: "#111827" },
    { href: "https://x.com/Rohan30_01", icon: <SiX />, label: "X", color: "#4B5563" },
    { href: "mailto:rsingh300103@gmail.com", icon: <FaEnvelope />, label: "Email", color: "#22C55E" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div className="mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 font-handwritten">
            Let''s Build Something Together
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-[#3B82F6]/60 rounded-full blur-[0.5px] rotate-[-1deg]" />
          </div>
        </motion.div>

        <motion.div className="bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.35)] p-8 sm:p-10 mb-12" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 bg-[#E5E7EB]/80 rounded-sm shadow-md rotate-[2deg]" />
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4">Got a project in mind?</h3>
          <p className="text-[#4B5563] text-lg mb-6">From startups to hackathons, AI/ML to Web3—let''s create something impactful.</p>
          <motion.a href="mailto:rsingh300103@gmail.com" className="inline-flex items-center gap-3 px-8 py-3 bg-[#F97316] text-white rounded-lg font-semibold shadow-md" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <FaEnvelope /> Send Me an Email
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <p className="text-[#FDF9F3] mb-6 font-handwritten text-lg">or connect with me on</p>
          <div className="flex justify-center items-center gap-4 flex-wrap mb-12">
            {socialLinks.map((social, index) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#FDF9F3] border-2 border-[#E5D9C9] rounded-xl shadow-md transition-all" style={{ color: social.color }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.1 }} whileHover={{ y: -5, rotate: index % 2 === 0 ? -3 : 3, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <div className="text-3xl">{social.icon}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="pt-8 border-t-2 border-[#FDF9F3]/20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}>
          <p className="text-[#FDF9F3]/60 text-sm font-handwritten">Designed & Built with  by Rohan Singh  2025</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
