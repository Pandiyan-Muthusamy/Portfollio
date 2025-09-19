import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCogs,
  FaCertificate,
  FaDownload,
  FaBriefcase,
  FaLanguage,
} from "react-icons/fa";

export default function Resume() {
  const resumeData = {
    name: "Pandiyan Muthusamy",
    title: "Front-end Developer | MERN Stack Developer",
    summary:
      "Enthusiastic MERN Stack Developer with a passion for creating dynamic and user-friendly web applications, leveraging modern technologies for scalable solutions.",
    education: [
      {
        degree: "B.Tech in Information Technology",
        institution: "Govt College of Technology",
        year: "2020 - 2023",
        percentage: "CGPA : 7.1",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Mahabharath Higher Education",
        year: "2016 - 2017",
        percentage: "71%",
      },
      {
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "Mahabharath Higher Education",
        year: "2014 - 2015",
        percentage: "77%",
      },
    ],
    experience: [
      {
        role: "Front-end Developer",
        company: "Besant Technologies, OMR",
        duration: "Sep 2024 - Aug 2025",
        responsibilities: [
          "Developed responsive UI components using React and Tailwind CSS.",
          "Integrated REST APIs with Axios for dynamic data rendering.",
          "Implemented client-side routing with React Router.",
          "Optimized frontend performance and improved reusability with component-based architecture.",
          "Collaborated with the team to debug, test, and deploy web applications.",
          "Gained hands-on experience with modern JavaScript (ES6+) and async programming.",
        ],
        projects: [
          {
            name: "Admission & Attendance Tracking System",
            description:
              "Developed a web application to manage student admissions and track daily attendance with real-time reporting.",
          },
          {
            name: "Placement Training & Tracking",
            description:
              "Built a platform to organize placement training sessions, monitor student progress, and generate reports.",
          },
          {
            name: "Real-Time Chat & Virtual Support",
            description:
              "Implemented a chat application with real-time messaging and virtual support features using Socket.io client",
          },
        ],
      },
      {
        role: "Front-end Developer Intern",
        company: "Besant Technologies, OMR",
        duration: "May 2024 - Aug 2024",
        responsibilities: [
          "Worked on building responsive web applications using React and Tailwind CSS.",
          "Integrated REST APIs with frontend using Axios.",
          "Implemented client-side routing using React Router.",
          "Collaborated with senior developers to debug and optimize applications.",
        ],
      },
    ],
    projects: [
      {
        name: "E-Commerce Website",
        description:
          "Developed a full-fledged e-commerce platform with authentication, cart functionality, and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      },
      {
        name: "Portfolio Website",
        description:
          "Designed and developed a personal portfolio to showcase skills and projects with animations.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
      },
      {
        name: "Guess the Number Game",
        description:
          "A Guessing Number Game challenges players to guess a randomly generated number with hints like 'Too high' or 'Too low.' The goal is to find the correct number in the fewest attempts.",
        tech: ["React", "Tailwind CSS"],
      },
      {
        name: "Transaction Application",
        description:
          "Designed and developed a transaction management app to record, track, and analyze financial transactions securely.",
        tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      },
      {
        name: "Contact Manager Application",
        description:
          "Created a contact management system with CRUD operations, search, and filter functionalities.",
        tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux & Context API",
      "Tailwind CSS",
      "REST APIs",
      "SOAP APIs",
      "Socket.io-Client",
      "Git & GitHub",
    ],
    certifications: [
      "MERN Stack Course Completion @ Besant Technology",
      "Internship Certification in Front-end Development @ Besant Technology",
    ],
    languages: ["Tamil", "English"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center p-6">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center pb-6 border-b border-gray-300"
          variants={itemVariants}
        >
          <h2 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800">
            {resumeData.name}
          </h2>
          <h3 className="text-base sm:text-sm md:text-md text-gray-700">
            {resumeData.title}
          </h3>
          <p className="text-gray-700 mt-4 text-sm md:text-xs sm:text-xs">
            {resumeData.summary}
          </p>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row mt-6">
          <motion.div className="md:w-1/2 p-4" variants={itemVariants}>
            <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <ul className="mt-3 space-y-3">
              {resumeData.education.map((edu, i) => (
                <motion.li
                  key={i}
                  className="bg-white px-6 py-3 rounded-lg text-sm md:text-xs sm:text-xs"
                  variants={itemVariants}
                >
                  <strong>{edu.degree}</strong> at {edu.institution} ({edu.year}
                  ) <br /> {edu.percentage}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="md:w-1/2 p-4" variants={itemVariants}>
            <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaCogs /> Skills
            </h3>
            <div className="flex flex-wrap gap-3 mt-3">
              {resumeData.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="bg-blue-100 text-black px-4 py-2 rounded-lg text-xs md:text-xs font-medium"
                  variants={itemVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2 mt-6">
              <FaCertificate /> Certifications
            </h3>
            <ul className="mt-3 space-y-2">
              {resumeData.certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  className="bg-green-100 text-black px-4 py-2 rounded-lg text-xs md:text-xs font-medium"
                  variants={itemVariants}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className="mt-6 p-4" variants={itemVariants}>
          <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaBriefcase /> Experience
          </h3>
          <ul className="mt-3 space-y-3">
            {resumeData.experience.map((exp, i) => (
              <motion.li
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-sm md:text-xs sm:text-xs font-semibold">
                  {exp.role} - {exp.company}
                </h4>
                <p className="text-gray-600 text-xs md:text-xs sm:text-xs italic">
                  {exp.duration}
                </p>
                <ul className="list-disc ml-5 mt-2 text-gray-600 text-xs space-y-1">
                  {exp.responsibilities.map((resp, j) => (
                    <li key={j}>{resp}</li>
                  ))}
                </ul>

                {exp.projects && (
                  <div className="mt-2">
                    {exp.projects.map((proj, k) => (
                      <div key={k} className="bg-gray-100 p-2 rounded mb-2">
                        <h5 className="font-semibold text-xs">{proj.name}</h5>
                        <p className="text-gray-600 text-xs">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="mt-6 p-4" variants={itemVariants}>
          <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaLaptopCode /> Projects
          </h3>
          <ul className="mt-3 space-y-3">
            {resumeData.projects.map((proj, i) => (
              <motion.li
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-sm md:text-xs sm:text-xs font-semibold">
                  {proj.name}
                </h4>
                <p className="text-gray-600 text-xs md:text-xs sm:text-xs">
                  {proj.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {proj.tech.map((tech, j) => (
                    <motion.span
                      key={j}
                      className="bg-blue-100 text-black px-3 py-1 rounded-lg text-xs md:text-xs sm:text-xs font-medium"
                      variants={itemVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="mt-6 p-4" variants={itemVariants}>
          <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaLanguage /> Languages
          </h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {resumeData.languages.map((lang, i) => (
              <motion.span
                key={i}
                className="bg-gray-100 text-black px-4 py-2 rounded-lg text-xs md:text-xs font-medium"
                variants={itemVariants}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="/Pandiyan Muthusamy.pdf"
            download="Pandiyan Muthusamy.pdf"
            className="w-full sm:w-auto px-6 py-3 bg-[#d2f2c9] text-black text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition flex items-center justify-center space-x-2"
          >
            <FaDownload className="text-sm" />
            <span className="text-sm">Download Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
