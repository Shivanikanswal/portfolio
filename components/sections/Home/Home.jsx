import Section from "../../layout/SectionWrapper";
import AnimationLayout from "./components/AnimationLayout";
const Home = () => {
  return (
    <div
      className=" flex flex-col justify-between pt-10 sm:pt-20 min-h-screen"
      style={{
        background:
          "radial-gradient(circle at bottom left, #eaddf6 40%, #ffffff 80%)",
      }}
    >
      <Section id="home" className="flex-1">
        <div className="flex flex-col sm:gap-4 gap-2">
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
          <p>
            a design minded Frontend Developer, focused on creating user-centric
            web applications.
          </p>
        </div>
      </Section>
      <AnimationLayout />
    </div>
  );
};

export default Home;
