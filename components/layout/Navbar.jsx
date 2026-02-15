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
      name: "Contacts",
      link: "#contact",
    },
  ];
  return (
    <>
      <nav className=" flex w-full py-4 shadow shadow-gray-200">
        <ul className="flex justify-between w-full px-3.5 text-neutral-700">
          <p className="icon">SHIVANI</p>
          <div className="flex gap-6 text-[15px]">
            {navItems.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
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
