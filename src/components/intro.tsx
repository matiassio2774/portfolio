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
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState([]);

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
      spanElement.classList.add("bounce"); // Agregar la clase bounce
      // Eliminar la clase bounce después de 0.5 segundos (duración del rebote)
      setTimeout(() => {
        spanElement.classList.remove("bounce");
      }, 500);
    }

    // Cambiar color aleatorio
    let newColor: any;

    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === color);
    setColor(newColor);

    // Obtener posición del clic
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Centro del span
    const y = rect.top;

    setParticles((prev) => [
      ...prev,
      { id: Date.now(), x, y, color: newColor }, // ID único
    ]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p: any) => p.id !== Date.now()));
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      setParticles((prev) => [...prev, { id, color }]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 1000);
    }, 1000);

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
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <Fragment>
      <div className="flex flex-col items-start justify-center p-0 m-0 text-lg max-w-fit">
        <div className="font-thin text-orange-200 ">
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              animate="reveal"
              initial="hidden"
              transition={{ delay: index * 0.04 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div>
          <span className={title()}>hi, i'm&nbsp;</span>
          <span className={title({ color: "yellow", class: "font-bold" })}>
            Matías&nbsp;
          </span>
        </div>
      </div>
      <br />
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
              "font-bold text-2xl italic lg:text-3xl cursor-pointer noselect",
          })}
          id="bounce-text"
          style={
            {
              "--text-glow": getShadowColor(color),
            } as React.CSSProperties
          }
          onClick={handleColorChange}
        >
          beautiful&nbsp;
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {particles.map((particle: any) => (
              <motion.div
                key={particle.id}
                animate={{ opacity: 0, y: -30, scale: 1.2 }}
                className="absolute w-2 h-2 rounded-full"
                initial={{ opacity: 1, y: 0, scale: 0.8 }}
                style={{
                  left: `10rem`,
                  top: ".2rem",
                  backgroundColor: particle.color,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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
    </Fragment>
  );
};
