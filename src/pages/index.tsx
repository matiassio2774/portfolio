import { motion } from "framer-motion";

import splitStringUsingRegex from "../utils/split";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

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
        <div className="flex flex-col items-center justify-center max-w-lg text-center">
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
          <div className="flex flex-col md:flex-row">
            <ol className="relative border-gray-200 border-s dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-orange-400 dark:bg-orange-400" />
                <time className="mb-1 text-sm font-semibold leading-none text-orange-400 dark:text-orange-400">
                  Jan 2023 - Current
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend developer at Bewise
                </h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  I developed and designed web applications, focusing on dynamic
                  and responsive interfaces, ensuring an intuitive, efficient
                  and visually appealing user experience.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Sept 2022 - Dec 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Intern at Bewise
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  I learned and applied frontend knowledge in a real work
                  environment, collaborating with the team on projects and
                  improving my skills in web interface development.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
