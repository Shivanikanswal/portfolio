const Header = () => {
  return (
    <div className="flex justify-between p-4 m-2 text-lg border-b border-b-slate-600 items-center">
      <img
        src="https://i.pinimg.com/736x/06/bc/e8/06bce81285badba0c3becd273ca67f95.jpg"
        className=" h-20 w-28"
      ></img>
      <nav className=" flex gap-9 mr-3">
        <a href="#main">ABOUT</a>
        <a href="#background">BACKGROUND</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">WORK</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
};

export default Header;
