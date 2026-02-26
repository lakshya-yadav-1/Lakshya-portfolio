import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Aspiring MERN Stack Developer seeking an entry-level full-stack
                development role. Skilled in JavaScript, Node.js, Express.js,
                MongoDB, and React.js, with a strong interest in building
                reliable and maintainable web applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Gained hands-on experience with REST APIs, authentication
                systems, and backend logic through multiple projects. Focused on
                clean backend architecture, secure authentication, and scalable
                API design through practical project work.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about learning new technologies and solving complex
                problems with innovative solutions. Always eager to contribute
                to team success and grow as a developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Focus Areas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Full-Stack Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      End-to-end web application development using MERN stack
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      API Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      RESTful API design and implementation with proper
                      authentication
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Database Design
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      MongoDB schema design and MySQL database management
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Responsive Design
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mobile-first design with modern CSS frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
