"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  // Initialize currentHash from window.location.hash if available; default to "#home"
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash
      : "#home",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col items-center justify-center pt-3">
      <nav className="flex gap-1 rounded-xl border border-border bg-foreground/10 px-0.5 py-1 backdrop-blur">
        {navLinks.map((navLink, index) => {
          const isActive = currentHash === navLink.href;
          return (
            <Link
              key={index}
              href={navLink.href}
              onClick={() => setCurrentHash(navLink.href)}
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
