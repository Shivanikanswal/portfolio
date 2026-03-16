import Section from "../layout/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { HomeData } from "../../public/data/home-data";
const Contact = () => {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="contact-heading text-3xl sm:text-5xl font-bold text-neutral-600 mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-xl">
            Have a project idea or opportunity? Feel free to reach out or send
            me a message below.
          </p>
        </div>

        {/* Contact + Form Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Contact Links */}
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="contact-me text-lg sm:text-xl text-gray-800">
              Get in Touch
            </h3>
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition"
            >
              <span>📩</span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-800 font-medium">Email Me</span>
                <span className="text-gray-600">shivanikanswal@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition cursor-pointer">
              <span>📍</span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-800 font-medium">Location</span>
                <span className="text-gray-600">Dehradun, India</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              {HomeData.slice(0, 2).map((item, index) => {
                return (
                  <div key={item.id} className="">
                    <Link
                      href={item.href}
                      className="flex w-11 h-11 border border-gray-300 bg-white items-center justify-center rounded-xl shadow-md hover:scale-110 transition-all duration-300 "
                    >
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.label}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Message Form */}
          <div className="border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm flex-1">
            <h3 className="contact-me text-lg sm:text-xl text-gray-800 mb-6">
              Send a Message
            </h3>

            <form className="flex flex-col gap-4 sm:gap-5">
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />

              <input
                type="email"
                placeholder="your.email@example.com"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />

              <textarea
                rows="4"
                placeholder="Tell me about your project, requirements and timeline."
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />

              <button
                type="submit"
                className="  bg-[#3E5F4B] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
