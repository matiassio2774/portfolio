import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";

import { Work } from "./work";

export const Experience = () => {
  const work = [
    {
      date: "Jan 2023 - Current",
      company: "Bewise",
      link: "https://www.bewise.com.es/es",
      description:
        "I developed and designed web applications, focusing on dynamic and responsive interfaces, ensuring an intuitive, efficient and visually appealing user experience.",
      area: "Frontend developer",
    },
    {
      date: "Sept 2022 - Dec 2022",
      company: "Bewise",
      link: "https://www.bewise.com.es/es",
      description:
        "I learned and applied frontend knowledge in a real work environment, collaborating with the team on projects and improving my skills in web interface development.",
      area: "Intern",
    },
  ];

  return (
    <Fragment>
      <motion.div
        animate={{ opacity: 1, y: 0 }} // Termina completamente visible y en su posición normal
        initial={{ opacity: 0, y: -20 }} // Comienza invisible y ligeramente arriba
        transition={{ duration: 1 }} // Duración de la animación
      >
        <div className="flex flex-col items-center justify-center sm:max-w-96">
          <motion.span
            animate={{
              textShadow: [
                "0 0 0px rgba(255, 255, 255, 0)",
                "0 0 10px rgba(99, 102, 241, 0.4)",
                "0 0 20px rgba(99, 102, 241, 0.2)",
                "0 0 10px rgba(99, 102, 241, 0.4)",
                "0 0 0px rgba(255, 255, 255, 0)",
              ],
            }}
            className="mb-6 text-2xl font-semibold lg:text-2xl relative inline-block"
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-indigo-400 to-gray-200 animate-gradient">Experience</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.span>
          <ol className="relative border-gray-200 border-s dark:border-gray-700">
            {work.map((job, index) => (
              <Work key={index} {...job} />
            ))}
          </ol>
        </div>
      </motion.div>
    </Fragment>
  );
};
