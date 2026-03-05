import Link from "next/link";
import Section from "../../layout/SectionWrapper";
import AnimationLayout from "./components/AnimationLayout";
import { HomeData } from "../../../public/data/home-data";
// import bgImage from "/public/utils/home/doodle.jpg";
import { it } from "node:test";
import Image from "next/image";
const Home = () => {
  return (
    <div
      className=" flex flex-col justify-between pt-10 sm:pt-24 min-h-screen gap-10 sm:gap-24 text-neutral-700"
      style={{
        background: "linear-gradient(-225deg, #c1dfc4 -20%, #deecdd 40%)", // green
        // background: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)", //52
        // backgroundImage: "url('/utils/home/doodle.jpg')",
        // backgroundSize: "cover",
        // opacity: 0.1,
      }}
    >
      <Section id="home" className="flex-1">
        <div className="flex flex-col sm:gap-8 gap-4">
          <p className="text-[16px]">Hi, I am</p>
          <div className="hero flex items-end text-6xl gap-1.5">
            <p
              className="font-semibold"
              style={{ opacity: 0.9, transform: "none" }}
            >
              Shivani Kanswal
            </p>
            <span
              className="text-5xl"
              style={{ transform: "translateY(-8px)" }}
            ></span>
          </div>
          <p className="text-[15px]">
            {/* A design minded Frontend Developer, focused on building fast,
            scalable, and user-friendly Web Applications. */}
            A frontend engineer driven by curiosity and clean design, building
            intuitive user interfaces with React and Next.js and engineering
            scalable solutions that power intelligent, AI-driven products.
          </p>
          <div className="flex gap-4 mt-6">
            {HomeData.map((item) => {
              return (
                <Link
                  key={item.id}
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
