import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-slate-100 px-6 py-20"
    >
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 space-y-10 border border-gray-200">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-3">Let’s Connect</h2>
          <p className="text-gray-600 text-lg">
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <a
              href="mailto:bezawitmamo27@gmail.com"
              className="hover:text-indigo-700 transition"
            >
              bezawitmamo27@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-indigo-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/bezawit-mamo-1540782aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-indigo-600 text-xl" />
            <a
              href="https://github.com/bezimamo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaTelegram className="text-indigo-600 text-xl" />
            <a
              href="https://t.me/bezawite_21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition"
            >
              @bezawite_21
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
