import Link from "next/link";

const linkStyle = "text-center text-xs leading-5 text-gray-500 hover:text-gray-900";

const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-700 mt-10">
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-12 sm:space-y-0">
        <Link
          className={linkStyle}
          href="/aboutus"
        >
          About Us
        </Link>
        <a
          className={linkStyle}
          href="https://github.com/AndreiCalazans/tailwind-ai-generator"
        >
          Source Code
        </a>
        <a
          className={linkStyle}
          href="mailto:andreixoc@gmail.com"
        >
          Contact
        </a>
      </div>
      <a
        href="https://andrei-calazans.com/"
        className={`${linkStyle} mt-5`}
      >
        © {new Date().getUTCFullYear()} All rights reserved to Andrei Calazans
      </a>
    </footer>
  );
};

export default Footer;
