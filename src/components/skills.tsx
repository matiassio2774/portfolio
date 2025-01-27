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
    {
      icon: "aws",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-start w-full">
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
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Skills&nbsp;
        </motion.span>
        <div className="flex flex-col items-start justify-center gap-10 sm:flex-row">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex items-center justify-center gap-2">
              <span className="text-base font-thin">Frontend</span>
              <Chip
                classNames={{
                  base: "bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/30", // Cambio a verde
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
                  base: "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-yellow-500/30", // Amarillo
                  content: "drop-shadow shadow-black text-white",
                }}
                size="sm"
                startContent={
                  <LightbulbIcon height={".5em"} size={18} width={".5em"} /> // Aquí usamos el ícono de libro
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
          animate={{ opacity: 1, y: 0 }} // Se mueve hacia su posición y aparece
          className="mt-24 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 20 }} // Inicia fuera de la pantalla
          transition={{ duration: 0.6 }}
          whileInView={{
            y: [0, -10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }} // Rebote sutil
        >
          Expanding to Full Stack development😊
        </motion.span>
      </div>
    </Fragment>
  );
};
