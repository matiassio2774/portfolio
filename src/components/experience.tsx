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
                "0 0 2px rgba(255, 255, 0, 0.8)",
                "0 0 5px rgba(255, 255, 0, 0.6)",
                "0 0 2px rgba(255, 255, 0, 0.8)",
                "0 0 0px rgba(255, 255, 255, 0)",
              ],
              color: ["#ffffff", "#ffe8c2", "#ffffff"],
            }}
            className="mb-6 text-2xl font-semibold lg:text-2xl"
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Experience&nbsp;
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
