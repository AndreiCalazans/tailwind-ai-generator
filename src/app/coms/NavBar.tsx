"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const activeClass = "underline decoration-indigo-600";
const navClass = "px-2 text-lg font-bold tracking-tight text-gray-900"

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="py-2 mb-4 gap-2 flex flex-row">
    <div>
      <Link
        href="/"
        className={`${navClass} ${
          pathname === "/" ? activeClass : ""
        }`}
      >
        Home
      </Link>
      </div>
      <div>
      <Link
        href="/gallery"
        className={`${navClass} ${
          pathname === "/gallery" ? activeClass : ""
        }`}
      >
        Gallery
      </Link>
      </div>
    </div>
  );
};
