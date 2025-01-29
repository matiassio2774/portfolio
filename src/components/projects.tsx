import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

import { GithubIcon, SearchIcon } from "./icons";

export const Projects = () => {
  const projects = [
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "node"],
    },
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "tailwind"],
    },
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "tailwind"],
    },
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "tailwind"],
    },
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "tailwind"],
    },
    {
      label: "project 1",
      link: "https://www.bewise.com.es/es",
      github: "",
      description: "test description",
      img: "",
      tech: ["angular", "tailwind"],
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
            <Card
              key={index}
              isFooterBlurred
              className="h-[300px] col-span-12 sm:col-span-5 lg:min-w-96"
            >
              <img
                alt="Card example background"
                className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
                src="/card-example-2.jpeg"
              />
              <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/5">
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
                <div className="flex items-center justify-center gap-3">
                  <Link isExternal href={project.github} title="GitHub">
                    <GithubIcon className="text-white" />
                  </Link>
                  <Link isExternal href={project.link} title="web">
                    <SearchIcon className="text-white" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
