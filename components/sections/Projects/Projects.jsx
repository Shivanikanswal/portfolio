"use client";
import { projectData } from "../../../public/data/projects-data";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-6 py-10 sm:py-24 min-h-screen place-items-center"
    >
      <section className="flex justify-center px-6 w-full">
        <div className="flex flex-col items-center mx-auto">
          <p className="project-heading text-2xl sm:text-5xl font-semibold text-neutral-600 mb-10">
            Projects
          </p>
          <div className="space-y-14">
            {projectData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: item.id * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-10 shadow-md hover:shadow-2xl rounded-2xl border border-[#f3f3f3]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="rounded-xl w-full md:max-w-175">
                      <ImageCarousel images={item.image} />
                    </div>
                    <div className="flex gap-4 flex-col px-2">
                      <h2 className="project-sub-heading text-lg sm:text-xl font-bold text-black">
                        {item.name}
                      </h2>
                      <p className="text-neutral-500 text-sm sm:text-base">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-3.5">
                        {item.tech.map((itm, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-[#deecdd] rounded-2xl px-3 py-1 text-neutral-600 text-xs sm:text-sm"
                            >
                              <span>{itm}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-5 text-neutral-500 cursor-pointer ">
                        <Link
                          href={item.live}
                          target="_blank"
                          className="border-b-2"
                        >
                          Live
                        </Link>
                        <Link
                          href={item.github}
                          target="_blank"
                          className="border-b-2"
                        >
                          Github
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
