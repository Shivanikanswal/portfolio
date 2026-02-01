import Section from "../layout/SectionWrapper";
import { skills } from "../../public/data/skill-data";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center py-10 sm:py-24 px-6 w-full bg-linear-to-b from-[#f7f7f7] to-[#efefef] "
    >
      <div className="flex flex-col gap-12 max-w-6xl mx-auto items-center">
        <p className=" text-2xl sm:text-5xl font-semibold text-neutral-500">
          {" "}
          Tools and Technologies{" "}
        </p>
        <div className="skill-card grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-48 gap-y-8 place-items-center">
          {skills.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-3 p-2 items-center">
                <div className="w-16 h-16 rounded-lg bg-white p-2 shadow-sm">
                  <Image
                    src={item.logo}
                    alt="skills-logo"
                    width={56}
                    height={56}
                  />
                </div>
                <p className=" text-xs sm:text-sm font-bold text-gray-700 tracking-wider">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
