import Image from "next/image";
import Section from "../../layout/SectionWrapper";
import { projectData } from "../../../public/data/projects-data";
import ImageCarousel from "./ImageCarousel";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-6 py-10 sm:py-24 min-h-screen place-items-center"
    >
      <section className="flex justify-center px-6 w-full">
        <div className="flex flex-col items-center mx-auto">
          <p className="text-2xl sm:text-5xl font-semibold text-neutral-600 mb-10">
            Projects
          </p>
          <div className="space-y-14">
            {projectData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white p-10 shadow-md hover:shadow-2xl rounded-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="rounded-xl w-full md:max-w-[700px]">
                      <ImageCarousel images={item.image} />
                    </div>
                    <div className="flex gap-4 flex-col px-2">
                      <h2 className="text-lg sm:text-xl font-bold text-black">
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
                              className="bg-[#eaddf6] rounded-2xl px-3 py-1 text-neutral-600 text-xs sm:text-sm"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
