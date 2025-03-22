import { motion } from "framer-motion";
import { Link } from "@heroui/link";

import { GithubIcon } from "./icons";

export const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matiassio/",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="text-blue-500"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/matiassio2774",
      icon: <GithubIcon className="w-5 h-5 text-gray-300" />
    },
    {
      name: "Email",
      url: "mailto:siomatias20@gmail.com",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-orange-400"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    }
  ];

  return (
    <>
      <motion.div 
        className="fixed left-0 top-[40%] bg-black/30 backdrop-blur-sm border-r border-white/10 rounded-r-lg p-2 z-50 hidden md:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col gap-6">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + (index * 0.1), duration: 0.3 }}
              whileHover={{ 
                scale: 1.15, 
                transition: { duration: 0.2 }
              }}
              className="flex items-center"
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 p-3 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex justify-center gap-8">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + (index * 0.1), duration: 0.3 }}
              whileHover={{ 
                scale: 1.15, 
                transition: { duration: 0.2 }
              }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}; 