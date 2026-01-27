import Image from "next/image";
import Home from "../components/sections/Home/Home";
import Skills from "../components/sections/Skills";
import WorkTimeline from "../components/sections/WorkTimeline";
import Contact from "../components/sections/Contact";

export default function Page() {
  return (
    <div>
      <Home />
      <Skills />
      <WorkTimeline />
      <Contact />
    </div>
  );
}
