import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    Languages: ["Java", "JavaScript", "SQL"],
    Frontend: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL"],
    "Developer Tools": ["Git", "GitHub", "Postman", "VS Code"],
    "APIs & Architecture": ["REST APIs", "MVC Architecture"],
  };

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    JavaScript / Node.js
                  </span>
                  <span className="text-blue-400">85%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    React.js
                  </span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    MongoDB
                  </span>
                  <span className="text-blue-400">75%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    Express.js
                  </span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                  <span className="text-blue-400">85%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-gray-300">
                    REST APIs
                  </span>
                  <span className="text-blue-400">90%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
