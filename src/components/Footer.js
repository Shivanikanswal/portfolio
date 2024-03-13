const Footer = () => {
  return (
    <footer className=" flex justify-between px-14 py-20">
      <div className="designedby text-base font-semibold font-sans">
        Designed and Developed by <br />
        Shivani Kanswal 2024
      </div>
      <div className="footer-links uppercase font-bold text-blue-500">
        <a
          href="https://www.linkedin.com/in/shivani-kanswal-a44120173"
          className=" px-2 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:shivanikanswal@gmail.com"
          className=" px-2 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/Shivanikanswal"
          className=" px-2 hover:underline"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
