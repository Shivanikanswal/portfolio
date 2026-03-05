"use client";
import { skills } from "../../public/data/skill-data";
import Image from "next/image";
import { motion } from "motion/react";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="skills"
      className="flex justify-center py-10 sm:py-24 px-6 w-full bg-neutral-50"
    >
      <div className="flex flex-col gap-18 max-w-6xl mx-auto items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="skill-heading text-2xl sm:text-5xl font-semibold text-neutral-500"
        >
          {" "}
          Tools and Technologies{" "}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="skill-card grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-48 gap-y-8 place-items-center"
        >
          {skills.map((item, index) => {
            return (
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                variants={fadeUp}
                transition={{ duration: 0.28 }}
                key={index}
                className="flex flex-col gap-3 p-2 items-center"
              >
                <div className="w-16 h-16 rounded-lg bg-white p-2 shadow-sm shadow-[#e6dee9]">
                  <Image
                    src={item.logo}
                    alt="skills-logo"
                    width={56}
                    height={56}
                  />
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-700 tracking-wider">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
