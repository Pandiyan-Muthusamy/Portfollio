import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";

export default function About() {
  const roadmap = [
    {
      stage: "10th Standard",
      institution: "Mahabharathi Hr Sec School",
      year: "2014 - 2015",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-blue-700",
      percentage: "Percentage : 77.2%",
    },
    {
      stage: "12th Standard",
      institution: "Mahabharathi Hr Sec School",
      year: "2016 - 2017",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-blue-700",
      percentage: "Percentage : 71.1%",
    },
    {
      stage: "Diploma in Computer Science",
      institution: "Rengeswara Polytechnic College",
      year: "2017 - 2019",
      icon: <FaBook />,
      color: "from-purple-500 to-purple-700",
      percentage: "Percentage : 91.27%",
      title: "Knowledge & Skills",
      points: {
        line1:
          "Web Development - HTML, CSS, JavaScript for front-end and backend development.",
        line2: "Database Management - Knowledge of SQL and database handling.",
        line3:
          "Operating Systems - Basics of Windows, Linux, and system management.",
        line4:
          "Programming Fundamentals - Understanding of basic programming concepts and logic.",
      },
    },
    {
      stage: "B.Tech in Information Technology",
      institution: "Govt College of Technology",
      year: "2020 - 2023",
      icon: <FaGraduationCap />,
      color: "from-indigo-500 to-indigo-700",
      title: "Knowledge & Skills",
      points: {
        line1: "Web Development - HTML, CSS, JavaScript, React.",
        line2: "Software Development Lifecycle (SDLC).",
        line3: "Database Management - SQL and NoSQL database handling.",
        line4:
          "Operating Systems - Basics of Windows, Linux, and system management.",
        line5:
          "Programming Fundamentals - Understanding of advanced programming concepts.",
      },
    },
    {
      stage: "Advanced Course (MERN Stack)",
      institution: "Besant Technologies, Porur",
      year: "2023 - 2024",
      icon: <FaBook />,
      color: "from-yellow-500 to-yellow-700",
      title: "Knowledge & Skills",
      course: [
        {
          heading: "JavaScript",
          body: "Advanced JavaScript concepts including ES6+ features and async programming.",
        },
        {
          heading: "React",
          body: "React skills and component-based development.",
        },
        {
          heading: "Node.js",
          body: "Backend development using Express and Node.js.",
        },
        {
          heading: "MongoDB",
          body: "Database management and CRUD operations.",
        },
        {
          heading: "Tailwind CSS",
          body: "Utility-first CSS framework for designing modern UIs.",
        },
        {
          heading: "Full-Stack Projects",
          body: "Building real-world applications using MERN stack.",
        },
      ],
    },
    {
      stage: "Front-end Developer Internship",
      institution: "Besant Technologies, OMR",
      year: "May 2024 - August 2024",
      icon: <FaBriefcase />,
      color: "from-yellow-500 to-yellow-700",
      title: "Internship Experience",
      course: [
        {
          heading: "JavaScript",
          body: "Advanced JavaScript concepts including ES6+ features and async programming.",
        },
        {
          heading: "React",
          body: "React skills and component-based development.",
        },
        {
          heading: "Axios",
          body: "Handling API requests and integrating backend services with frontend.",
        },
        {
          heading: "React Router",
          body: "Client-side routing for building single-page applications.",
        },
        {
          heading: "REST APIs",
          body: "Designing and consuming RESTful APIs for scalable applications.",
        },
        {
          heading: "Tailwind CSS",
          body: "Utility-first CSS framework for designing modern UIs.",
        },
      ],
      rolesAndResponsibilities: {
        line1:
          "Developed responsive UI components using React and Tailwind CSS.",
        line2: "Integrated REST APIs with Axios for dynamic data rendering.",
        line3: "Implemented client-side routing with React Router.",
        line4:
          "Optimized frontend performance and improved reusability with component-based architecture.",
        line5:
          "Collaborated with the team to debug, test, and deploy web applications.",
        line6:
          "Gained hands-on experience with modern JavaScript (ES6+) and async programming.",
      },
    },
    {
      stage: "Front-end Developer",
      institution: "Besant Technologies, OMR",
      year: "September 2024 - August 2025",
      icon: <FaBriefcase />,
      color: "from-yellow-500 to-yellow-700",
      title: "Full-Time Experience",
      course: [
        {
          heading: "JavaScript",
          body: "Advanced JavaScript concepts including ES6+ features and async programming.",
        },
        {
          heading: "React",
          body: "React skills and component-based development.",
        },
        {
          heading: "Axios",
          body: "Handling API requests and integrating backend services with frontend.",
        },
        {
          heading: "React Router",
          body: "Client-side routing for building single-page applications.",
        },
        {
          heading: "REST APIs",
          body: "Designing and consuming RESTful APIs for scalable applications.",
        },
        {
          heading: "Tailwind CSS",
          body: "Utility-first CSS framework for designing modern UIs.",
        },
      ],
      rolesAndResponsibilities: {
        line1:
          "Developed responsive UI components using React and Tailwind CSS.",
        line2: "Integrated REST APIs with Axios for dynamic data rendering.",
        line3: "Implemented client-side routing with React Router.",
        line4:
          "Optimized frontend performance and improved reusability with component-based architecture.",
        line5:
          "Collaborated with the team to debug, test, and deploy web applications.",
        line6:
          "Gained hands-on experience with modern JavaScript (ES6+) and async programming.",
      },
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
            "Implemented a chat application with real-time messaging and virtual support features using WebSockets.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6 py-10 bg-gray-50 text-center overflow-x-hidden">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Journey
      </motion.h1>
      <motion.p
        className="text-xs sm:text-xs md:text-sm max-w-2xl mt-4 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A roadmap of my educational and professional milestones.
      </motion.p>
      <div className="mt-10 w-full max-w-4xl relative container mx-auto">
        <div className="relative flex flex-col items-center space-y-12">
          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-center justify-center w-full gap-y-6 md:gap-y-0 md:space-x-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-black rounded-full shadow-xl mx-4 md:mx-12"
                style={{
                  background: `linear-gradient(to right, ${step.color})`,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                whileHover={{ scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {step.icon}
              </motion.div>

              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/20 backdrop-blur-lg p-4 sm:p-5 rounded-2xl border border-gray-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                  {step.stage}
                </h4>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                  {step.institution}
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                  {step.year}
                </p>
                {step.percentage && (
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600">
                    {step.percentage}
                  </p>
                )}
                {step.title && (
                  <p className="text-left text-xs sm:text-xs md:text-sm text-gray-800 font-bold mt-2">
                    {step.title}
                  </p>
                )}

                {step.points && (
                  <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                    {Object.values(step.points).map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                )}

                {step.course && (
                  <>
                    <p className="text-left text-xs sm:text-xs md:text-sm text-gray-800 font-bold mt-2">
                      Knowledge & Skills
                    </p>
                    <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                      {step.course.map((item, index) => (
                        <li key={index}>
                          <strong>{item.heading}: </strong>
                          {item.body}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {step.rolesAndResponsibilities && (
                  <>
                    <p className="text-left text-xs sm:text-xs md:text-sm text-gray-800 font-bold mt-2">
                      Roles & Responsibilities
                    </p>
                    <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                      {Object.values(step.rolesAndResponsibilities).map(
                        (task, index) => (
                          <li key={index}>{task}</li>
                        )
                      )}
                    </ul>
                  </>
                )}

                {step.projects && (
                  <>
                    <p className="text-left text-xs sm:text-xs md:text-sm text-gray-800 font-bold mt-2">
                      Projects
                    </p>
                    <ul className="text-left text-xs sm:text-xs md:text-sm text-gray-600 list-disc list-inside mt-2 mr-5">
                      {step.projects.map((project, index) => (
                        <li key={index}>
                          <strong>{project.name}: </strong>
                          {project.description}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
