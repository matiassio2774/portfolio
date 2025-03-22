import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardFooter, CardHeader, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";

import { GithubIcon } from "./icons";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      label: "ColorSnap",
      link: "https://color-snap-sage.vercel.app",
      github: "https://github.com/matiassio2774/ColorSnap",
      description: "Image color extractor with pixel precision",
      longDescription: "Tool that allows you to select any point on an image and get its exact color code in different formats. Perfect for designers and developers.",
      img: "colorsnap",
      tech: ["angular", "tailwind"],
      featured: true
    },
    {
      id: 2,
      label: "SoundCloud Downloader",
      link: "https://frontend-soundcloud-downloader.onrender.com",
      github: "https://github.com/matiassio2774/soundcloud-downloader",
      description: "Unrestricted SoundCloud music downloader",
      longDescription: "Full-stack application that allows you to download SoundCloud tracks in high quality without limitations. Includes user management and favorites.",
      img: "sc",
      tech: ["react", "node", "sql", "docker"],
      featured: true
    },
    {
      id: 3,
      label: "Personal Portfolio",
      link: "#",
      github: "https://github.com/matiassio2774/portfolio",
      description: "Interactive personal website with advanced animations",
      longDescription: "Professional portfolio with advanced visual effects using Framer Motion and responsive design to showcase my projects and skills.",
      img: "portfolio",
      tech: ["react", "tailwind"],
      featured: false
    }
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [featuredProject, setFeaturedProject] = useState<number | null>(null);
  
  const allTechs = Array.from(
    new Set(projects.flatMap(project => project.tech))
  ).filter(tech => !["typescript", "css", "vue"].includes(tech));

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tech.includes(activeFilter));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleShowDetails = (id: number) => {
    setFeaturedProject(featuredProject === id ? null : id);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full" id="projects">
        {/* Section title */}
        <motion.div 
          className="mb-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-indigo-400 to-gray-200 animate-gradient">Projects</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.span>
        </motion.div>

        {/* Technology filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button
            className={`px-4 py-1 text-sm font-medium transition-all duration-200 ${
              activeFilter === "all" 
                ? "bg-orange-500 text-white" 
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
            }`}
            size="sm"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          
          {allTechs.map(tech => (
            <Button
              key={tech}
              className={`px-4 py-1 text-sm font-medium transition-all duration-200 ${
                activeFilter === tech 
                  ? "bg-orange-500 text-white" 
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
              }`}
              size="sm"
              onClick={() => setActiveFilter(tech)}
            >
              <img 
                src={`/icons/${tech}.svg`} 
                alt={tech} 
                className="w-4 h-4 mr-2"
              />
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </Button>
          ))}
        </motion.div>

        {/* Featured project section */}
        <AnimatePresence>
          {featuredProject && (
            <motion.div
              className="w-full mb-12 overflow-hidden bg-gradient-to-r from-gray-900/70 to-black/70 rounded-xl border border-orange-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {projects
                .filter(p => p.id === featuredProject)
                .map(project => (
                  <div key={project.id} className="p-6 flex flex-col md:flex-row gap-8">
                    <motion.div 
                      className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <img 
                        src={`${project.img}.webp`} 
                        alt={project.label} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="w-full md:w-1/2 flex flex-col justify-between"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.label}</h3>
                        <p className="text-gray-300 mb-4">{project.longDescription}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map(tech => (
                            <Chip 
                              key={tech}
                              color="warning"
                              variant="flat"
                              className="capitalize"
                            >
                              {tech}
                            </Chip>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button
                          as={Link}
                          href={project.link}
                          target="_blank"
                          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium px-6"
                        >
                          View Demo
                        </Button>
                        
                        <Button
                          as={Link}
                          href={project.github}
                          target="_blank"
                          className="bg-gray-800 text-white"
                          startContent={<GithubIcon className="w-5 h-5" />}
                        >
                          View Code
                        </Button>
                        
                        <Button
                          className="ml-auto text-gray-400"
                          variant="light"
                          onClick={() => setFeaturedProject(null)}
                        >
                          Close
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="w-full"
                variants={projectVariants}
                layout
                exit="exit"
              >
                <button 
                  className="w-full cursor-pointer bg-transparent border-0 p-0 m-0"
                  onClick={() => handleShowDetails(project.id)}
                  aria-label={`View details for ${project.label}`}
                >
                  <Card 
                    className="bg-black/30 border border-white/10 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 h-[280px] overflow-hidden"
                  >
                    <CardHeader className="absolute z-10 top-0 flex-col items-start p-4">
                      <div className="flex justify-between w-full">
                        <Chip color={project.featured ? "warning" : "default"} size="sm" variant="flat">
                          {project.featured ? "Featured" : "Project"}
                        </Chip>
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="light" 
                          className="text-white/80 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShowDetails(project.id);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardBody className="p-0 overflow-hidden">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />
                        <img
                          alt={project.label}
                          className="w-full h-full object-cover z-0"
                          src={`${project.img}.webp`}
                        />
                      </div>
                    </CardBody>
                    
                    <CardFooter className="absolute bg-black/50 backdrop-blur-sm bottom-0 border-t border-white/10 z-10">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-white text-sm font-bold">{project.label}</p>
                        
                        <div className="flex gap-2">
                          <Button
                            as={Link}
                            isExternal
                            isIconOnly
                            size="sm"
                            href={project.github}
                            aria-label="GitHub"
                            className="bg-white/10 backdrop-blur-md text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </Button>
                          
                          <Button
                            as={Link}
                            isExternal
                            isIconOnly
                            size="sm"
                            href={project.link}
                            aria-label="Live Demo"
                            className="bg-orange-500 text-white"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="w-full py-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found with this technology.</p>
            <Button 
              className="mt-4 bg-orange-500 text-white"
              onClick={() => setActiveFilter("all")}
            >
              View all projects
            </Button>
          </motion.div>
        )}
      </div>
    </Fragment>
  );
};
