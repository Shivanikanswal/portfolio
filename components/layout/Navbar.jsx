import Link from "next/link";

const Navbar = () => {
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
          <p className="icon bg-gradient-to-r from-[#2D2A4A] to-[#6C63FF] bg-clip-text text-transparent">
            SHIVANI
          </p>
          <div className="nav-items flex gap-6 text-[14px] text-neutral-600">
            {navItems.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="transition-all duration-300 hover:bg-gradient-to-r hover:from-[#776be4] hover:to-[#6C63FF] hover:bg-clip-text hover:text-transparent"
                >
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </div>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
