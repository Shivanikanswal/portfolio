const Header = () => {
  return (
    <div className="flex justify-between p-4 m-2 text-lg border-b border-b-slate-600 items-center">
      <img
        src="https://i.pinimg.com/736x/06/bc/e8/06bce81285badba0c3becd273ca67f95.jpg"
        // onMouseOver={(e) => (e.currentTarget.src = )}
        // onMouseOut={(e) =>
        // (e.currentTarget.src =
        // "https://i.pinimg.com/736x/06/bc/e8/06bce81285badba0c3becd273ca67f95.jpg")
        // }
        className=" h-20 w-28 hover:hidden"
      ></img>
      <nav className=" flex gap-9 mr-3">
        <a href="#main">Home</a>
        <a href="#background">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
