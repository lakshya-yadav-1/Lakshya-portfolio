import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using Formspree for direct email sending
      const response = await axios.post("https://formspree.io/f/mnjboeyz", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "lakshyayadav7672@gmail.com",
      href: "mailto:lakshyayadav7672@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 9754181870",
      href: "tel:+919754181870",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Whether you have a question, want to discuss a project, or just
              want to say hello, I'd love to hear from you. I'm open to
              collaboration and always excited to work on challenging projects.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
                Current Status
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                🟢 Available for freelance projects
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                🔍 Open to full-time opportunities
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                📧 Typically respond within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-600 text-white rounded-lg">
                  ✅ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-600 text-white rounded-lg">
                  ❌ Oops! Something went wrong. Please try again or email me
                  directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Project Discussion / Job Opportunity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-gray-400 dark:text-gray-300 text-sm">
                <p>Your message will be sent directly to my email inbox</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
