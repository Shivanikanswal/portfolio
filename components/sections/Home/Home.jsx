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
      className=" flex flex-col justify-between pt-10 sm:pt-24 min-h-screen gap-10 sm:gap-24 text-neutral-700 overflow-x-hidden"
      style={{
        background: "radial-gradient(#c3c3ff, #fff)",
      }}
    >
      <Section id="home" className="flex-1 relative">
        <div className="flex flex-col sm:gap-8 gap-4 z-10 relative">
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

        <div className="z-0 absolute bottom-0 right-0 translate-x-3/4 translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/10 border border-white/20 backdrop-blur-md shadow-[inset_0_4px_20px_rgba(255,255,255,0.15)]" />

        {/* Smaller overlapping circle */}
        <div className="z-0 absolute top-10 left-0 -translate-x-3/4 -translate-y-3/5 w-[200px] h-[200px] rounded-full bg-gradient-to-tl from-purple-300/20 to-pink-200/10 border border-white/30 backdrop-blur-sm shadow-[inset_0_4px_16px_rgba(255,255,255,0.2),0_8px_40px_rgba(139,92,246,0.15)]" />
      </Section>
      <AnimationLayout />
    </div>
  );
};

export default Home;
