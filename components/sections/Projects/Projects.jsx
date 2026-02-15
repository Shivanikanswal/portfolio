import Image from "next/image";
import Section from "../../layout/SectionWrapper";
import { projectData } from "../../../public/data/projects-data";
import ImageCarousel from "./ImageCarousel";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-6 py-10 sm:py-24 min-h-screen place-items-center"
    >
      <Section>
        <p className="text-2xl sm:text-5xl font-semibold text-neutral-600 mb-10">
          Projects
        </p>
        <div className="space-y-14">
          {projectData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white p-6 shadow-md hover:shadow-2xl rounded-2xl"
              >
                <div className="grid grid-col-1 gap-4 place-items-center">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <div className=" rounded-xl">
                    <ImageCarousel images={item.image} />
                  </div>
                  <div className="flex gap-2.5 flex-col px-2">
                    <p className="text-neutral-400 text-sm">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3.5">
                      {item.tech.map((itm, index) => {
                        return (
                          <div
                            key={index}
                            className="bg-[#eaddf6] rounded-2xl px-3 text-neutral-600 text-sm"
                          >
                            <span>{itm}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};
export default Projects;
