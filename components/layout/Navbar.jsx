"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "About",
      link: "#home",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <nav className="flex w-full py-4 shadow-sm">
        <ul className="flex justify-between w-full px-7 text-neutral-700 items-center">
          <p className="icon bg-linear-to-r from-[#2D2A4A] to-[#6C63FF] bg-clip-text text-transparent">
            SHIVANI
          </p>
          <div className="nav-items hidden md:flex gap-6 text-[14px] text-neutral-600">
            {navItems.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="transition-all duration-300 hover:bg-linear-to-r hover:from-[#776be4] hover:to-[#6C63FF] hover:bg-clip-text hover:text-transparent"
                >
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </ul>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-md px-7 py-4 flex flex-col gap-4 text-[14px] text-neutral-600 z-50">
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-3 transition-all duration-300 hover:bg-linear-to-r hover:from-[#776be4] hover:to-[#6C63FF] hover:bg-clip-text hover:text-transparent"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
