"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../public/data/work-experience-data";
import Link from "next/link";

export default function WorkTimeline() {
  return (
    <section id="work" className="py-20 worktimeline-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="work-heading text-5xl font-bold mb-16 text-center text-neutral-500">
          Work Experience
        </h2>

        <VerticalTimeline lineColor="#3E5F4B">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={{
                background: "#c1dfc4",
                color: "#fff",
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
              <h3 className="text-base font-semibold text-gray-800">
                {exp.title}
              </h3>
              <h4>
                <Link
                  href={exp.website}
                  target="_blank"
                  className="text-[#59985f] font-normal mb-2 hover:text-yellow-600"
                >
                  {exp.company}
                </Link>
              </h4>
              <div>
                <ul className="pl-2.5">
                  {Array.isArray(exp?.description) &&
                    exp.description.length > 0 &&
                    exp?.description?.map((itms, index) => (
                      <li
                        key={index}
                        className="text-sm! text-gray-600 font-normal! mt-0! list-disc"
                      >
                        {itms}
                      </li>
                    ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
