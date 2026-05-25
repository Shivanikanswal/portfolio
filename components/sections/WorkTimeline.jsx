"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../public/data/work-experience-data";
import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

export default function WorkTimeline() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });

  const [locked, setLocked] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 1) setLocked(true);
  });

  const rawProgress = useTransform(scrollYProgress, (v) => (locked ? 1 : v));

  const height = useTransform(rawProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="work"
      className="py-16 md:py-20 worktimeline-bg relative overflow-x-hidden overflow-y-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 z-2">
        <h2 className="work-heading text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-neutral-500">
          Work Experience
        </h2>
        <div ref={timelineRef} className="relative z-2">
          {/* Background line */}
          <div className="absolute left-7 wide:left-1/2 md:left-10 -translate-x-1/2 top-0 w-0.75 h-full bg-gray-200 rounded" />

          {/* Animated gradient line */}
          <motion.div
            style={{ height }}
            className="absolute left-7 wide:left-1/2 md:left-10 -translate-x-1/2 top-0 w-0.75 rounded"
          >
            <div className="w-full h-full bg-linear-to-b from-blue-600 via-purple-500 to-pink-500" />
          </motion.div>

          <VerticalTimeline lineColor="transparent">
            {experiences.map((exp, index) => {
              // Trigger per item
              const trigger = (index + 0.5) / experiences.length;
              const scale = useTransform(
                rawProgress,
                [trigger - 0.1, trigger],
                [0.8, 1]
              );

              const opacity = useTransform(
                rawProgress,
                [trigger, trigger + 0.05],
                [0, 1]
              );

              return (
                <VerticalTimelineElement
                  key={index}
                  date={exp.date}
                  icon={
                    <div className="relative flex items-center justify-center">
                      {/* Circle */}
                      <motion.div
                        style={{ scale }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-r from-blue-200 to-purple-200"
                      />

                      {/* Tick */}
                      <motion.div
                        style={{ opacity, scale }}
                        className="absolute text-blue-700 text-xs md:text-sm font-bold"
                      >
                        ✓
                      </motion.div>
                    </div>
                  }
                  iconStyle={{
                    background: "transparent",
                    boxShadow: "none",
                  }}
                  contentStyle={{
                    background: "#eeedf1",
                    color: "#1f2937",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #eeedf1",
                  }}
                >
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">
                    {exp.title}
                  </h3>

                  <h4>
                    <Link
                      href={exp.website}
                      target="_blank"
                      className="text-blue-800 font-semibold mb-2 text-sm md:text-base"
                    >
                      {exp.company}
                    </Link>
                  </h4>

                  <ul className="pl-4">
                    {Array.isArray(exp?.description) &&
                      exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs md:text-sm text-gray-600 mt-1 list-disc"
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        <div className="absolute top-30 right-2 z-0 rounded-full bg-[#dbdbf8] w-24 h-24 sm:w-72 sm:h-72 translate-x-1/2 -translate-y-6/12"></div>
        <div className="absolute bottom-0 left-0 z-0 rounded-full bg-[#dfeffa] w-40 h-40 sm:w-96 sm:h-96 translate-y-6/12 -translate-x-6/12"></div>
      </div>
    </section>
  );
}
