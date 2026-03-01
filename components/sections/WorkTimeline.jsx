"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../public/data/work-experience-data";

export default function WorkTimeline() {
  return (
    <section id="work" className="py-20 worktimeline-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-neutral-500">
          Work Experience
        </h2>

        <VerticalTimeline lineColor="#a47fc5">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={{
                background: "#eaddf6",
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
              <h4 className="text-[#a47fc5] font-normal mb-2">{exp.company}</h4>
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
