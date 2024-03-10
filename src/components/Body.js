import portfolioImg from "../utils/portfolio-img.jpg";
const Body = () => {
  return (
    <div id="main-page" className=" mx-7 px-8 py-9">
      <section id="main">
        <div className="about my-16">
          <div className="flex justify-around items-center">
            <div className=" text-4xl max-w-[700px] font-light font-sans">
              <div className=" mb-16">
                <p className=" mb-6">Hello👋</p>
                <p className=" leading-[3.2rem]">
                  I'm <span className=" font-semibold">Shivani Kanswal</span>, a
                  design minded front-end software engineer based in India,
                  focused on creating user-centric web applications.{" "}
                </p>
              </div>
              <div className="text-xl max-w-[700px] font-normal font-sans items-center">
                <span>Get in Touch 👉 </span>
                <span className="">
                  <a href="mailto:shivanikanswal@gmail.com">
                    shivanikanswal@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div className="imgprot rounded-full overflow-hidden w-1/3">
              <img src={portfolioImg} className="portfolioimg"></img>
            </div>
          </div>
        </div>
      </section>
      <section
        id="background"
        className="background-section flex py-24 px-40 justify-center"
      >
        <div className=" mr-20 text-blue-400 font-semibold text-lg">
          BACKGROUND
        </div>
        <div className=" font-light">
          <p className=" mb-3">
            I've had worked as an{" "}
            <span className=" font-normal">Magento Developer</span> at{" "}
            <span className=" font-normal">Infogain</span>, building things for
            the web with some awesome people. I graduated from{" "}
            <span className=" font-normal">Graphic Era Hill University </span>
            after completing four year Computer science programme at Dehradun,
            India.
          </p>
          <p className=" mb-3">
            As a software engineer, I enjoy bridging the gap between engineering
            and design — combining my technical knowledge with my keen eye for
            design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
          </p>
          <p className=" mb-3">
            When I'm not in front of a computer screen, I'm probably playing
            badminton, experimenting in kitchen, or crossing off another item on
            my bucket list.
          </p>
        </div>
      </section>
      <section id="projects" className="projects-section flex py-24 px-40">
        <div className=" mr-20 text-blue-400 font-semibold text-lg">
          PROJECTS
        </div>
        <div>
          <div className="project-1">
            <div className="project-name text-base font-semibold">
              <a href="">Moviee Adda ➡</a>
            </div>
            <p>movieeadda app is useful for movie lovers</p>
            <div className="tech-used text-blue-400 font-semibold ">
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                React
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                TailwindCSS
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                HTML
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                JavaScript
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                React Router
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                TMDB API
              </span>
            </div>
          </div>
          <div className="project-2">
            <div className="project-name text-base font-semibold">
              <a href="">Food Maniaa ➡</a>
            </div>
            <p>general food app</p>
            <div className="tech-used">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;
