import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <div className="flex items-center space-x-3 mb-3">
            <FaEnvelope className="text-indigo-400" />
            <a
              href="mailto:bezawitmamo27@gmail.com"
              className="hover:text-white transition"
            >
              bezawitmamo27@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-indigo-400" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/bezawit-mamo-1540782aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bezimamo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/bezawite_21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Bezawit Mamo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
