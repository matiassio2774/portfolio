import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

import { GithubIcon } from "./icons";

export const Projects = () => {
  const projects = [
    {
      label: "project 1",
      link: "https://color-snap-sage.vercel.app",
      github: "https://github.com/matiassio2774/ColorSnap",
      description: "Image color picker 🖍️",
      img: "colorsnap",
      tech: ["angular", "tailwind"],
    },
    {
      label: "project 2",
      link: "https://frontend-soundcloud-downloader.onrender.com",
      github: "https://github.com/matiassio2774/soundcloud-downloader",
      description: "Soundcloud Downloader",
      img: "sc",
      tech: ["react", "node", "sql", "docker"],
    },
    {
      label: "project 1",
      link: "https://color-snap-sage.vercel.app",
      github: "https://github.com/matiassio2774/portfolio",
      description: "Personal portfolio",
      img: "portfolio",
      tech: ["react", "tailwind"],
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full">
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
          Projects&nbsp;
        </motion.span>
        <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:flex-wrap">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-full group lg:w-fit"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="relative h-[300px] col-span-12 sm:col-span-5 lg:min-w-96 overflow-hidden bg-black/10 rounded-xl">
                <motion.div
                  animate={{
                    borderColor: [
                      "rgba(255, 255, 255, 0.1)",
                      "rgba(255, 255, 255, 0.3)",
                      "rgba(255, 255, 255, 0.1)",
                    ],
                  }}
                  className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-white/60"
                  style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  alt="Card example background"
                  style={{height: '84%'}}
                  className="absolute inset-0 object-cover w-full transition duration-300 group-hover:blur-md"
                  src={`${project.img}.webp`}
                />

                <motion.div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                  <Link
                    isExternal
                    className="px-4 py-2 mb-2 font-semibold text-white transition bg-orange-500 rounded-lg hover:bg-orange-600"
                    href={project.link}
                  >
                    Demo
                  </Link>
                  {project.github && (
                    <Link
                      isExternal
                      className="px-2 py-2 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800"
                      href={project.github}
                    >
                      <GithubIcon className="text-white" />
                    </Link>
                  )}
                </motion.div>
                <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-center gap-5">
                    {project.tech.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center"
                        whileHover={{
                          scale: 1.2,
                          rotate: 15,
                          y: -5,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                      >
                        <img
                          key={index}
                          alt={tech}
                          className="w-6 h-6"
                          src={`/icons/${tech}.svg`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="font-semibold">{project.description}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
