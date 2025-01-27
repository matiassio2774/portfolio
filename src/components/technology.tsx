import { motion } from "framer-motion";

export const Technology = ({ tech }: any) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {tech.map((skill: any, index: number) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.05, 1], // Pulso de aumento y disminución
          }}
          // Efecto de pulso constante
          transition={{
            duration: 1.5,
            repeat: Infinity, // Repetir infinitamente
            repeatType: "reverse", // Reverso para hacer el pulso
          }}
          className="flex items-center justify-center"
          // Efecto de rebote en hover
          whileHover={{
            scale: 1.2,
            rotate: 15, // Rotación suave
            y: -5, // Leve movimiento hacia arriba
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
