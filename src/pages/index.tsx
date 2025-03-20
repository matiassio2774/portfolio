import { useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Intro } from "@/components/intro";

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div id="top"></div>
          <Intro />
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-col items-center justify-center gap-20 lg:items-start lg:flex-row">
            <Experience />
            <Skills />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-20 mt-20 lg:items-start lg:flex-row">
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
