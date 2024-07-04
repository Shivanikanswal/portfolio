import portfolioImg from "../utils/portfolio-img.jpg";
import htmlLogo from "../utils/media/html5-icon.png";
import cssLogo from "../utils/media/css3-icon.png";
import githubLogo from "../utils/media/github-icon.jpg";
import jQueryLogo from "../utils/media/jQuery-icon.png";
import javaScriptIcon from "../utils/media/js-icon.png";
import magentoIcon from "../utils/media/magento-icon.png";
import phpIcon from "../utils/media/php-icon.png";
import reactLogo from "../utils/media/react-icon.png";
import tailwindLogo from "../utils/media/tailwind-icon.png";
import linuxLogo from "../utils/media/linux-icon.jpg";
import lessIcon from "../utils/media/less-icon.png";
import parcelIcon from "../utils/media/parcel-icon.png";
import materialIcon from "../utils/media/material-icon.png";
import nodeIcon from "../utils/media/node-icon.png";
import mongodbIcon from "../utils/media/mongodb-icon.jpg";

const Body = () => {
  return (
    <div id="main-page" className=" mx-7 px-8 py-9">
      <section id="main">
        <div className="about my-16">
          <div className="flex justify-around items-center">
            <div className=" text-4xl max-w-[700px] font-light font-sans">
              <div className=" mb-16">
                <p className=" mb-6">
                  Hello
                  <span className="animate-waving-hand text-5xl">👋</span>
                </p>
                <p className=" leading-[3.2rem]">
                  I'm <span className=" font-semibold">Shivani Kanswal</span>, a
                  design minded Front-End Developer based in India, focused on
                  creating user-centric web applications.{" "}
                </p>
              </div>
              <div className="text-xl max-w-[700px] font-normal items-center">
                <span>Get in Touch 👉 </span>
                <span className="">
                  <a
                    href="mailto:shivanikanswal@gmail.com"
                    className=" hover:underline hover:text-blue-500"
                  >
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
        <div className=" mr-20 text-blue-400 font-semibold text-xl">
          BACKGROUND
        </div>
        <div className=" font-light text-lg">
          <p className=" mb-3">
            I'm currently working as an{" "}
            <span className=" font-normal">Frontend Web Developer</span> at{" "}
            <span className=" font-normal">FinGuard Technologies</span>,
            building things for the web with some awesome people. I graduated
            from{" "}
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
      <section id="experience" className="Experience flex py-24 px-40">
        <div className="mr-20 text-blue-400 font-semibold text-xl">
          EXPERIENCE
        </div>
        <div>
          <p className=" text-xl font-semibold mb-9 ml-28">
            SOME TECHNOLOGIES I'VE WORKED WITH
          </p>
          <div className="skills grid grid-cols-4 gap-4 w-2/3">
            <div className="logocls">
              <img
                src={htmlLogo}
                className="html h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={cssLogo}
                className="css h-28 w-[6.2rem] grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={javaScriptIcon}
                className="javas h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={githubLogo}
                className="git h-28 w-56 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={phpIcon}
                className="php h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={tailwindLogo}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={materialIcon}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={nodeIcon}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>

            <div className="logocls">
              <img
                src={jQueryLogo}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={mongodbIcon}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={magentoIcon}
                className="magen h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={reactLogo}
                className="reactl h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={lessIcon}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={linuxLogo}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
            <div className="logocls">
              <img
                src={parcelIcon}
                className="jquery h-28 w-36 grayscale hover:filter-none"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section flex py-24 px-40">
        <div className=" mr-20 text-blue-400 font-semibold text-xl">WORK</div>
        <div>
          <div className="project-1 mb-10">
            <div className="project-name text-lg font-semibold mb-3 hover:underline">
              <a href="https://movieeadda.netlify.app/">Moviee Adda ➡</a>
            </div>
            <p className=" mb-3 font-normal text-base">
              A small react project, basic designed movie website for the people
              who are curious about movies using TMDB API.{" "}
            </p>
            <div className="tech-used text-blue-400 font-semibold text-sm">
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
          <div className="project-2 mb-10">
            <div className="project-name text-lg font-semibold mb-3 hover:underline">
              <a href="https://foodmaniaa.netlify.app/">Food Maniaa ➡</a>
            </div>
            <p className="mb-3 font-normal text-base">
              Developed a highly efficient food delivery App including features
              like browsing, searching and filtering of restaurants. User can go
              through the items a particular restaurant is providing and can add
              them to cart and order food.
            </p>
            <div className="tech-used text-blue-400 font-semibold text-sm">
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                JavaScript
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                TailwindCSS
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                React
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                Redux
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                HTML
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                Swiggy Live API
              </span>
              <span className=" border border-solid border-blue-400 m-1 rounded-lg px-2 py-1 ">
                React Router
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;
