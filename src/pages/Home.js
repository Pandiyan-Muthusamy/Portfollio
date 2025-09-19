import { motion } from "framer-motion";
import { FaCheckCircle, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home({ setCurrentPage }) {
  const portfolioData = {
    name: "Pandiyan Muthusamy",
    title: (
      <span>
        Certified <FaCheckCircle className="inline text-green-500 text-2xl" />{" "}
        <span className="font-bold font-sriracha">MERN</span> Stack Developer{" "}
      </span>
    ),
    bio: "I create scalable web applications, have 1+ years of hands-on experience in Frontend Development, and love working with modern technologies.",
    socialLinks: {
      github: "https://github.com/Pandiyan-Muthusamy",
      linkedin:
        "https://www.linkedin.com/in/pandiyan-muthusamy-developer-pandiyan/",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center h-full w-full px-6 text-center bg-gray-50"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-5xl font-bold text-gray-900"
      >
        {portfolioData.name}
      </motion.h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2"
      >
        {portfolioData.title}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mt-4"
      >
        {portfolioData.bio}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex space-x-6 mt-6"
      >
        <a
          href={portfolioData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700 text-lg font-semibold flex items-center space-x-2 transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-2xl" /> <span>GitHub</span>
        </a>
        <a
          href={portfolioData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 text-lg font-semibold flex items-center space-x-2 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" /> <span>LinkedIn</span>
        </a>
      </motion.div>
      <motion.button
        onClick={() => setCurrentPage("resume")}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-[#d2f2c9] text-black text-sm font-semibold rounded shadow-lg hover:bg-gray-50 hover:text-green-600 transition flex items-center"
      >
        Hire Me
      </motion.button>
    </motion.div>
  );
}
