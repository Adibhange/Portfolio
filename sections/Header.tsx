"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="top-0 z-10 flex flex-col items-center justify-center pt-3">
      <nav className="flex gap-1 rounded-xl border border-border bg-foreground/10 p-0.5 backdrop-blur">
        {navLinks.map((navLink, index) => {
          const isActive = pathname === navLink.href;
          return (
            <Link
              key={index}
              href={navLink.href}
              className={`rounded-xl px-4 py-1.5 text-sm font-semibold transition duration-300 ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:bg-foreground/70 hover:text-background"
              }`}
            >
              {navLink.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
