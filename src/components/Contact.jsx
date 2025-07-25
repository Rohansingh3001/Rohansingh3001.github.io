import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter) Icon

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-20 relative z-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-400 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations, ideas, or just to say hi. I’m always excited to meet passionate people.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 flex-wrap mb-16">
          {[
            {
              href: "https://www.instagram.com/rohan_30.01/",
              icon: <FaInstagram size={28} />,
              label: "Instagram",
              hover: "hover:text-pink-500",
            },
            {
              href: "https://www.linkedin.com/in/rohan-singh-033748243/",
              icon: <FaLinkedin size={28} />,
              label: "LinkedIn",
              hover: "hover:text-blue-400",
            },
            {
              href: "mailto:rsingh300103@gmail.com",
              icon: <FaEnvelope size={28} />,
              label: "Email",
              hover: "hover:text-yellow-300",
            },
            {
              href: "https://x.com/Rohan30_01",
              icon: <SiX size={28} />,
              label: "X (formerly Twitter)",
              hover: "hover:text-gray-300",
            },
          ].map(({ href, icon, label, hover }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-white transition duration-300 transform hover:scale-110 ${hover}`}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-6 text-sm text-white/40">
          &copy; {new Date().getFullYear()} Rohan Singh. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
