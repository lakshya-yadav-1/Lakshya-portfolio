import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
              Lakshya Yadav
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-4 md:mb-6 px-4">
              MERN Stack Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
          >
            Aspiring MERN Stack Developer skilled in JavaScript, Node.js,
            Express.js, MongoDB, and React.js. Passionate about building
            reliable and maintainable web applications with clean backend
            architecture and secure authentication systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-12 px-4"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-200 text-sm sm:text-base"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 md:mb-8"
          >
            <a
              href="https://www.linkedin.com/in/lakshya--yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/lakshya-yadav-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={28} />
            </a>
            <button
              onClick={() => {
                window.open('mailto:lakshyayadav7672@gmail.com?subject=Hello from Portfolio');
              }}
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-0 cursor-pointer"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </button>
            <button
              onClick={() => {
                window.open('tel:+919754181870');
              }}
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-0 cursor-pointer"
              aria-label="Phone"
            >
              <FaPhone size={28} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              📧 lakshyayadav7672@gmail.com | 📱 +91 9754181870
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
