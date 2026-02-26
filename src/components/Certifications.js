import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      credentialUrl:
        "https://drive.google.com/file/d/1WgXNaLJrnb1VRfoBoQ7dgo0JDye6nflE/view?usp=drive_link",
      type: "bootcamp",
    },
    {
      title: "REST API (Intermediate)",
      issuer: "Hackerrank",
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/b41fa0632fdb",
      type: "technical",
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "Hackerrank",
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/aed0ae172d88",
      type: "technical",
    },
  ];

  const getCertificationIcon = (type) => {
    switch (type) {
      case "bootcamp":
        return "🎓";
      case "technical":
        return "💻";
      default:
        return "🏆";
    }
  };

  return (
    <section
      id="certifications"
      className="py-12 sm:py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    {getCertificationIcon(cert.type)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <FaCertificate className="mr-2" />
                    <span className="font-medium">Verified Certificate</span>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                  >
                    <span className="mr-2">View</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-white mb-6 max-w-3xl mx-auto">
              Committed to continuous learning and skill enhancement through
              industry-recognized certifications and hands-on project
              experience. Always exploring new technologies and best practices
              in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <h4 className="text-white font-bold text-lg mb-1">3+</h4>
                <p className="text-white text-sm">
                  Professional Certifications
                </p>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <h4 className="text-white font-bold text-lg mb-1">100+</h4>
                <p className="text-white text-sm">Hours of Learning</p>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
                <h4 className="text-white font-bold text-lg mb-1">Ongoing</h4>
                <p className="text-white text-sm">Skill Development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
