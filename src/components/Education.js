import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Business Administration",
      institution: "Sant Singaji Institute of Science & Management",
      period: "2023 – 2026",
      cgpa: "7.45",
      type: "undergraduate",
    },
    {
      degree: "Higher Secondary | Commerce",
      institution: "Shree Vidhya Sagar Higher Secondary School",
      period: "2022 – 2023",
      percentage: "75.2%",
      type: "higher-secondary",
    },
  ];

  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xl text-blue-400 mb-4">
                    {edu.institution}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCalendarAlt className="mr-2" />
                      {edu.period}
                    </div>
                    {edu.cgpa && (
                      <div className="bg-gray-700 px-3 py-1 rounded-full">
                        <span className="text-gray-700 dark:text-gray-300">
                          CGPA:{" "}
                        </span>
                        <span className="text-white font-semibold">
                          {edu.cgpa}
                        </span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="bg-gray-700 px-3 py-1 rounded-full">
                        <span className="text-gray-700 dark:text-gray-300">
                          Percentage:{" "}
                        </span>
                        <span className="text-white font-semibold">
                          {edu.percentage}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.type === "undergraduate"
                        ? "Currently pursuing Bachelor's degree with focus on business administration and management principles, complementing technical skills with business acumen."
                        : "Completed higher secondary education with commerce specialization, building foundation for business and technical studies."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-white mb-6">
              Complementing formal education with continuous learning through
              online courses, certifications, and hands-on project development
              in modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  Self-Taught Developer
                </span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  Online Certifications
                </span>
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  Project-Based Learning
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
