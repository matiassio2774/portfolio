import { motion } from "framer-motion";

import splitStringUsingRegex from "../utils/split";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function IndexPage() {
  const text = "frontend developer";
  const textChars = splitStringUsingRegex(text);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center">
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
          <div>
            <span
              className={title({
                class: "text-2xl font-thin opacity-90 lg:text-3xl",
              })}
            >
              Crafting&nbsp;
            </span>
            <span
              className={title({
                color: "green",
                class: "font-bold text-xl italic lg:text-3xl",
              })}
            >
              beautiful&nbsp;
            </span>
            <span
              className={title({
                class: "text-2xl font-thin opacity-90 lg:text-3xl",
              })}
            >
              and functional web experiences&nbsp;
            </span>
          </div>
          <br />
          <br />
          <br />
          <div className="flex flex-col items-center justify-center gap-20 lg:items-start lg:flex-row">
            <Experience />
            <Skills />
          </div>
          <div className="flex flex-col items-center justify-center gap-20 mt-20 lg:items-start lg:flex-row">
            <Projects />
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </DefaultLayout>
  );
}
