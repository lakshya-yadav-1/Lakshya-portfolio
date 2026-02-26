import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FixHub – On-Demand Home Service Platform",
      description:
        "Architected end-to-end service flow covering 3 core modules: user onboarding, service requests, and technician assignment. Structured REST-based server logic with 10+ API endpoints for users, services, and booking operations.",
      features: [
        "JWT-based authentication with role-based authorization",
        "5+ MongoDB schemas with validation and relational references",
        "React.js frontend with authentication and service request flows",
        "40+ Git commits in collaborative setup",
      ],
      techStack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "React.js",
        "JavaScript",
        "JWT",
      ],
      liveUrl: "https://fix-hub-ten.vercel.app/",
      githubUrl: "https://github.com/riya-bhati10/FixHub.git",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Wanderlust – Full Stack Property Rental Platform",
      description:
        "Built full-stack property rental platform serving 500+ listings using Node.js, Express.js, and MongoDB. Integrated secure authentication system supporting 100+ concurrent users with Passport.js.",
      features: [
        "15+ RESTful API endpoints with 99% uptime",
        "Responsive UI with 95% mobile compatibility",
        "3-second page load time optimization",
        "Optimized database queries for performance",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      liveUrl: "https://wanderlust-usxk.onrender.com/",
      githubUrl: "https://github.com/lakshya-yadav-1/Wanderlust.git",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Furniture E-Commerce Website",
      description:
        "Developed e-commerce platform showcasing 20+ furniture products with 5 category filters. Implemented shopping cart functionality reducing checkout time by 40% using local storage.",
      features: [
        "100% responsive design across 5+ device breakpoints",
        "Mobile-first layout approach",
        "Product sorting logic by price and category",
        "Local storage for cart management",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://lakshya-yadav-1.github.io/Furniture-Shop-Website/",
      githubUrl:
        "https://github.com/lakshya-yadav-1/Furniture-Shop-Website.git",
      category: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === "frontend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Frontend
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-900 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                  >
                    <FaPlay className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
