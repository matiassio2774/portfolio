import { Fragment } from "react/jsx-runtime";

import { title } from "./primitives";

export const Experience = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center max-w-96">
        <span
          className={title({
            class: "text-2xl font-semibold mb-6 lg:text-2xl",
          })}
        >
          Experience&nbsp;
        </span>
        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          <li className="p-2 mb-10">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-400 dark:bg-green-400" />
            <time
              className={title({
                class: "mb-1 text-sm font-bold leading-none lg:text-sm",
                color: "green",
              })}
            >
              Jan 2023 - Current
            </time>
            <h3 className="text-base font-normal text-gray-900 dark:text-white ">
              Frontend developer at{" "}
              <a
                className="font-bold work"
                href="https://www.bewise.com.es/es"
                target="blank_"
              >
                Bewise
              </a>
            </h3>
            <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              I developed and designed web applications, focusing on dynamic and
              responsive interfaces, ensuring an intuitive, efficient and
              visually appealing user experience.
            </p>
          </li>
          <li className="p-2 mb-10">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time
              className={title({
                class:
                  "mb-1 text-sm font-sm leading-none text-gray-500 lg:text-sm",
              })}
            >
              Sept 2022 - Dec 2022
            </time>
            <h3 className="text-base font-normal text-gray-900 dark:text-white">
              Intern at{" "}
              <a
                className="font-bold work"
                href="https://www.bewise.com.es/es"
                target="blank_"
              >
                Bewise
              </a>
            </h3>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              I learned and applied frontend knowledge in a real work
              environment, collaborating with the team on projects and improving
              my skills in web interface development.
            </p>
          </li>
        </ol>
      </div>
    </Fragment>
  );
};
