import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import { Chip } from "@heroui/chip";

import { Technology } from "./technology";
import { CheckIcon, LightbulbIcon } from "./icons";

export const Skills = () => {
  const frontend = [
    {
      icon: "angular",
    },
    {
      icon: "react",
    },
    {
      icon: "tailwind",
    },
  ];

  const backend = [
    {
      icon: "node",
    },
    {
      icon: "sql",
    },
  ];

  const tools = [
    {
      icon: "git",
    },
    {
      icon: "docker",
    },
  ];

  return (
    <Fragment>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-start w-full">
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-indigo-400 to-gray-200 animate-gradient">Skills</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.span>
          <div className="flex flex-col items-start justify-center gap-10 sm:flex-row">
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-thin">Frontend</span>
                <Chip
                  classNames={{
                    base: "bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/30",
                    content: "drop-shadow shadow-black text-white",
                  }}
                  size="sm"
                  startContent={
                    <CheckIcon height={".5em"} size={18} width={".5em"} />
                  }
                  variant="shadow"
                >
                  <span className="text-xs font-semibold">Main</span>
                </Chip>
              </div>
              <Technology tech={frontend} />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-thin">Backend</span>
                <Chip
                  classNames={{
                    base: "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-yellow-500/30",
                    content: "drop-shadow shadow-black text-white",
                  }}
                  size="sm"
                  startContent={
                    <LightbulbIcon height={".5em"} size={18} width={".5em"} />
                  }
                  variant="shadow"
                >
                  <span className="text-xs font-semibold">Learning</span>
                </Chip>
              </div>
              <Technology tech={backend} />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <span className="text-lg font-thin">Tools</span>
              <Technology tech={tools} />
            </div>
          </div>
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            whileInView={{
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Expanding to Full Stack development😊
          </motion.span>
        </div>
      </motion.div>
    </Fragment>
  );
};
