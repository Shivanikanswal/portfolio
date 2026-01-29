import Link from "next/link";
import Section from "../../layout/SectionWrapper";
import AnimationLayout from "./components/AnimationLayout";
const Home = () => {
  return (
    <div
      className=" flex flex-col justify-between pt-10 sm:pt-24 min-h-screen gap-10 sm:gap-24 text-neutral-700"
      style={{
        background:
          "radial-gradient(circle at bottom left, #eaddf6 40%, #ffffff 70%)",
      }}
    >
      <Section id="home" className="flex-1">
        <div className="flex flex-col sm:gap-8 gap-4">
          <p>Hi, I'm</p>
          <div className="flex items-end text-6xl gap-1.5">
            <p className="font-normal">Shivani Kanswal</p>
            <span
              className="text-4xl"
              style={{ transform: "translateY(-8px)" }}
            >
              🌼
            </span>
          </div>
          <p className="text-[15px]">
            a design minded Frontend Developer, focused on building fast,
            scalable, and user-friendly web applications.
          </p>
          <Link href={"https://github.com"}>Resume</Link>
        </div>
      </Section>
      <AnimationLayout />
    </div>
  );
};

export default Home;
