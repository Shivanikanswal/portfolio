import Image from "next/image";
import Home from "../components/sections/Home/Home";
import Skills from "../components/sections/Skills";
import WorkTimeline from "../components/sections/WorkTimeline";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects/Projects";
import Footer from "../components/layout/Footer";

export default function Page() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <WorkTimeline />
    </div>
  );
}
