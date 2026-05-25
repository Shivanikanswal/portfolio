"use client";
import { useEffect, useState } from "react";
import Section from "../../../layout/SectionWrapper";
import Image from "next/image";

const AnimationLayout = () => {
  const [codeSnippetUi, setCodeSnippetUi] = useState("");

  const codeSnippet = [
    `.header {
  grid-column: 1/-1;
  display: flex;
} `,
    `.nav {      
  display: flex; 
  gap: 8px; 
  flex-direction: row;
}`,
    `.main {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    `.card { 
  border-radius: 8px;
  width: auto;
  background-color: aqua;
}`,
    `.footer {
  text-align: center; 
}`,
  ];

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    let isActive = true; // for cleanup
    let i = 0;

    async function startLoop() {
      while (isActive) {
        setCodeSnippetUi(codeSnippet[i]);
        i = (i + 1) % codeSnippet.length;
        await sleep(1500);
      }
    }

    startLoop();

    return () => {
      isActive = false; // stop loop on unmount
    };
  }, []);

  return (
    <div className="layout-animated-bg flex-1 pt-10 sm:pt-12 z-20">
      <Section className="flex flex-col">
        <div className="translate-y-10">
          <div className="w-35 h-35 sm:h-40 sm:w-40 bg-[#30303d] rounded-3xl items-center translate-x-45.5 sm:translate-x-54.5 p-3">
            <pre className="code-snippet text-[0.80rem] text-neutral-50 whitespace-pre-wrap ">
              {codeSnippetUi}
            </pre>
          </div>
          <div className="bg-[#30303d] w-6 h-6 rounded-4xl translate-x-46.5 sm:translate-x-50.5 mt-1.5"></div>
          <div className="bg-[#30303d] w-4 h-4 rounded-4xl translate-x-44.5 sm:translate-x-48.5 mt-1.5"></div>
        </div>
        <Image
          className=" opacity-100 shadow-b-sm mr-20"
          src="/utils/code-animated-girl.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </Section>
    </div>
  );
};
export default AnimationLayout;
