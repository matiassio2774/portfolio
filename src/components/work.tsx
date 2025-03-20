import { motion } from "framer-motion";
import { Link } from "@heroui/link";

interface WorkProps {
  date: string;
  area: string;
  company: string;
  link: string;
  description: string;
}

export const Work = ({ area, company, date, description, link }: WorkProps) => {
  return (
    <motion.li 
      className="mb-10 ms-4"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div 
        className="absolute w-3 h-3 bg-orange-400 rounded-full mt-1.5 -start-1.5 border-2 border-white"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <motion.div
        className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <time className="mb-1 text-sm font-normal leading-none text-gray-300">
          {date}
        </time>
        <h3 className="text-lg font-semibold text-white">
          <motion.span 
            whileHover={{ color: "#FFA500" }} 
            transition={{ duration: 0.2 }}
          >
            {area}
          </motion.span>{" "}
          at{" "}
          <Link 
            isExternal 
            href={link}
            className="relative text-orange-300 hover:text-orange-400 transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
          >
            {company}
          </Link>
        </h3>
        <motion.p 
          className="mt-2 text-base font-normal text-gray-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.li>
  );
};
