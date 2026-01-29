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
    <div className="layout-animated-bg flex-1 pt-10 sm:pt-24">
      <Section className="flex flex-col">
        <div className="w-40 h-40 bg-[#eeedf1] rounded-2xl items-center translate-x-32.5 p-3">
          <pre className=" code-snippet text-[0.80rem] text-neutral-500 whitespace-pre-wrap ">
            {codeSnippetUi}
          </pre>
        </div>
        <Image
          className=" opacity-100"
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
