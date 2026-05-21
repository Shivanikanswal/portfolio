"use client";
import { projectData } from "../../../public/data/projects-data";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative px-6 py-10 sm:py-24 min-h-screen place-items-center overflow-x-hidden"
    >
      <div className="absolute  top-0 right-0 z-0 rounded-full bg-[#f8ebff] w-40 h-40 sm:w-96 sm:h-96 translate-x-1/2 -translate-y-6/12"></div>
      <section className="relative flex justify-center px-6 w-full">
        <div className="flex flex-col items-center mx-auto z-10">
          <p className="project-heading text-3xl sm:text-5xl font-semibold text-neutral-600 mb-10">
            Projects
          </p>
          <div className="space-y-14">
            {projectData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: item.id * 0.1,
                  }}
                  // whileHover={{ scale: 1.0 }}
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
                      <div className="flex flex-wrap gap-3.5 my-2">
                        {item.tech.map((itm, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-linear-to-r from-blue-100 to-purple-100 rounded-2xl px-3 py-1 text-blue-800 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 border border-blue-200/50"
                            >
                              <span>{itm}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-6 text-neutral-700 cursor-pointer ">
                        <Link
                          href={item.github}
                          target="_blank"
                          className="border-b-2 flex items-center gap-1 hover:scale-110 transition-all duration-300 pb-0.5"
                        >
                          <Image
                            src={item.gitIcon}
                            width={22}
                            height={22}
                            alt={"code"}
                          />
                          View Code
                        </Link>
                        <Link
                          href={item.live}
                          target="_blank"
                          className="border-b-2 flex items-center gap-1 hover:scale-110 transition-all duration-300 pb-0.5"
                        >
                          <Image
                            src={item.linkIcon}
                            width={16}
                            height={16}
                            alt={"live"}
                          />
                          Live Demo
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
      <div className="absolute bottom-0 left-0 z-0 rounded-full bg-[#d7e2f7] w-40 h-40 sm:w-96 sm:h-96 -translate-y-6/12 -translate-x-6/12"></div>
    </div>
  );
};
export default Projects;
