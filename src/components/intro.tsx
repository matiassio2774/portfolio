import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { title } from "./primitives";

import splitStringUsingRegex from "@/utils/split";

export const Intro = () => {
  const text = "frontend developer";
  const textChars = splitStringUsingRegex(text);

  const colors = ["pink", "green", "cyan", "blue", "yellow", "violet"];
  const [color, setColor] = useState<
    "pink" | "green" | "cyan" | "blue" | "yellow" | "violet"
  >("green");
  const [, setIsClicked] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  const handleColorChange = () => {
    let randomColor: string | any;

    do {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === color);

    setColor(randomColor);
    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 300);
    const spanElement = document.getElementById("bounce-text");

    if (spanElement) {
      spanElement.classList.add("bounce");
      setTimeout(() => {
        spanElement.classList.remove("bounce");
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      
      if (Math.random() > 0.7) {
        const newParticle = {
          id,
          x: Math.random() * 20,
          y: 0,
          size: Math.random() * 3 + 1,
          color,
          velocity: {
            x: (Math.random() - 0.5) * 1,
            y: -Math.random() * 2 - 1
          }
        };
        
        setParticles(prev => [...prev, newParticle]);

        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== id));
        }, 1500);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [color]);

  const getShadowColor = (color: string) => {
    const colorMap: Record<string, string> = {
      pink: "rgba(255, 105, 180, 0.8)",
      green: "rgba(23, 201, 100, 0.8)",
      cyan: "rgba(0, 183, 250, 0.8)",
      blue: "rgba(0, 114, 245, 0.8)",
      yellow: "rgba(255, 176, 70, 0.8)",
      violet: "rgba(178, 73, 248, 0.8)",
    };

    return colorMap[color] || "rgba(255, 255, 255, 0.8)";
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    reveal: { opacity: 1, y: 0 },
  };

  return (
    <Fragment>
      <div className="flex flex-col items-start justify-center p-0 m-0 text-lg max-w-fit">
        <div className="font-thin text-orange-200">
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              animate="reveal"
              initial="hidden"
              transition={{ delay: index * 0.04, type: "spring", stiffness: 100 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div>
          <span className={title()}>hi, i&apos;m&nbsp;</span>
          <motion.span 
            className={title({ color: "yellow", class: "font-bold" })}
            animate={{ 
              textShadow: ["0 0 0px rgba(255, 255, 255, 0)", "0 0 8px rgba(255, 176, 70, 0.6)", "0 0 0px rgba(255, 255, 255, 0)"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            Matías&nbsp;
          </motion.span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <motion.div
        animate={{ opacity: 1, x: 0, scale: 1 }}
        className="relative"
        initial={{ opacity: 0, x: -100, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span
          className={title({
            class: "text-2xl font-thin opacity-90 lg:text-3xl",
          })}
        >
          Crafting&nbsp;
        </span>
        <span
          className={title({
            color: color,
            class:
              "font-bold text-2xl italic lg:text-3xl cursor-pointer noselect bg-gradient-to-r bg-clip-text",
          })}
          id="bounce-text"
          style={
            {
              "--text-glow": getShadowColor(color),
            } as React.CSSProperties
          }
          onClick={handleColorChange}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleColorChange();
            }
          }}
        >
          beautiful&nbsp;
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {particles.map((particle: any) => (
              <motion.div
                key={particle.id}
                animate={{ 
                  opacity: [1, 0.2, 0], 
                  y: particle.y - 50, 
                  x: particle.x + (particle.velocity?.x || 0) * 20,
                  scale: [1, 0.5]
                }}
                className="absolute rounded-full"
                initial={{ 
                  opacity: 1, 
                  x: particle.x, 
                  y: particle.y, 
                  scale: 1
                }}
                style={{
                  width: `${particle.size || 2}px`,
                  height: `${particle.size || 2}px`,
                  backgroundColor: getShadowColor(particle.color),
                  boxShadow: `0 0 6px ${getShadowColor(particle.color)}`,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
          </div>
        </span>
        <span
          className={title({
            class: "text-2xl font-thin opacity-90 lg:text-3xl",
          })}
        >
          and functional web experiences&nbsp;
        </span>
      </motion.div>
      
      <style>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .bounce {
          animation: bounce 0.5s ease;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Fragment>
  );
};
