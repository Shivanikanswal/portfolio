"use client";
import Link from "next/link";
import Section from "../../layout/SectionWrapper";
import AnimationLayout from "./components/AnimationLayout";
import { HomeData } from "../../../public/data/home-data";
import Image from "next/image";
import { motion } from "motion/react";
const Home = () => {
  return (
    <div
      className=" flex flex-col justify-between pt-10 sm:pt-24 min-h-screen gap-10 sm:gap-24 text-neutral-700"
      style={{
        background: "radial-gradient(#c3c3ff, #fff)",
      }}
    >
      <Section id="home" className="flex-1">
        <div className="flex flex-col sm:gap-8 gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-[16px]"
          >
            Hi, I am
          </motion.p>
          <div className="hero flex items-end text-5xl md:text-6xl gap-1.5">
            <motion.p
              className="text-neutral-600 font-semibold drop-shadow-2xl"
              style={{ opacity: 0.9, transform: "none" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Shivani Kanswal
            </motion.p>
            <span
              className="text-5xl"
              style={{ transform: "translateY(-8px)" }}
            ></span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-[15px]"
          >
            A frontend engineer driven by curiosity and clean design, building
            intuitive user interfaces with React and Next.js and engineering
            scalable solutions that power intelligent, AI-driven products.
          </motion.p>
          <div className="flex gap-4 mt-6">
            {HomeData.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 2.8 + index * 0.12,
                  }}
                >
                  <Link
                    // key={item.id}
                    href={item.href}
                    className="flex w-11 h-11 border border-gray-300 bg-white items-center justify-center rounded-xl shadow-md hover:scale-110 transition-all duration-300 "
                  >
                    <Image
                      src={item.icon}
                      width={22}
                      height={22}
                      alt={item.label}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
      <AnimationLayout />
    </div>
  );
};

export default Home;
