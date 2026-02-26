import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/lakshya--yadav/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/lakshya-yadav-1",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:lakshyayadav7672@gmail.com?subject=Hello from Portfolio",
      label: "Email",
    },
    {
      icon: <FaPhone className="text-xl" />,
      href: "tel:+919754181870",
      label: "Phone",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Lakshya Yadav</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              MERN Stack Developer passionate about building reliable and
              maintainable web applications.
            </p>
            <p className="text-gray-400 dark:text-gray-300">
              Focused on clean backend architecture, secure authentication, and
              scalable API design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => {
                const isMailOrTel = link.href.startsWith('mailto:') || link.href.startsWith('tel:');
                if (isMailOrTel) {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        window.open(link.href);
                      }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 border-0 cursor-pointer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </button>
                  );
                } else {
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  );
                }
              })}
            </div>
            <div className="text-gray-400 dark:text-gray-300">
              <p className="mb-2">📧 lakshyayadav7672@gmail.com</p>
              <p>📱 +91 9754181870</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-300 text-center md:text-left">
              © {currentYear} Lakshya Yadav. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
