import { motion } from "framer-motion";

import { title } from "./primitives";

export const Work = ({ area, company, date, description, link }) => {
  return (
    <li className="p-2 mb-10">
      {date.includes("Current") ? (
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(0, 255, 0, 0.5)",
              "0 0 10px rgba(0, 255, 0, 0.8)",
              "0 0 20px rgba(0, 255, 0, 0.5)",
              "0 0 10px rgba(0, 255, 0, 0.8)",
              "0 0 0px rgba(0, 255, 0, 0.5)",
            ],
          }}
          className="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-green-400"
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ) : (
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      )}
      <time
        className={title({
          class: "mb-1 text-sm font-bold leading-none lg:text-sm",
        })}
      >
        {date.includes("Current") ? (
          <span className="text-green-400">{date}</span>
        ) : (
          <span className="text-gray-500">{date}</span>
        )}
      </time>
      <h3 className="text-base font-normal text-gray-900 dark:text-white ">
        {area} at {""}
        <motion.a
          animate={{
            textShadow: [
              "0 0 5px rgba(138, 43, 226, 1)",
              "0 0 25px rgba(138, 43, 226, 0.2)",
              "0 0 5px rgba(138, 43, 226, 1)",
            ],
          }}
          className="font-bold text-cyan-200 work"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {company}
        </motion.a>
      </h3>
      <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};
