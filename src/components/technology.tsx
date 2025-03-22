import { motion } from "framer-motion";

export const Technology = ({ tech }: any) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {tech.map((skill: any, index: number) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center"
          whileHover={{
            scale: 1.2,
            rotate: 15,
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <img
            alt={skill.icon}
            className="w-10 h-10"
            src={`/icons/${skill.icon}.svg`}
          />
        </motion.div>
      ))}
    </div>
  );
};
