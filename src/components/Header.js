const Header = () => {
  return (
    <div className="flex justify-between p-4 m-2 text-lg border-b border-b-slate-400 items-center rounded-xl shadow-md">
      <img
        src="https://i.pinimg.com/736x/06/bc/e8/06bce81285badba0c3becd273ca67f95.jpg"
        className=" h-20 w-28"
      ></img>
      <nav className=" flex gap-9 mr-3 font-medium">
        <a href="#main" className="hover:text-blue-400">
          ABOUT
        </a>
        <a href="#background" className="hover:text-blue-400">
          BACKGROUND
        </a>
        <a href="#experience" className="hover:text-blue-400">
          EXPERIENCE
        </a>
        <a href="#projects" className="hover:text-blue-400">
          WORK
        </a>
        <a href="#contact" className="hover:text-blue-400">
          CONTACT
        </a>
      </nav>
    </div>
  );
};

export default Header;
