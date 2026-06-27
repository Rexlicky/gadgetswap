"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { wishlistCount } = useWishlist();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Katalog",
      href: "/marketplace",
    },
    {
      name: "Jual",
      href: "/sell",
    },
    {
      name: "Rekber",
      href: "/escrow",
    },
    {
      name: "Penjual",
      href: "/seller",
    },
    {
      name: "Pembeli",
      href: "/buyer",
    },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-cyan-400/10 bg-black/80 backdrop-blur-3xl"
          : "border-white/10 bg-black/40 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* =========================
            Logo
        ========================= */}
        <Link
          href="/"
          className="
    group
    relative
    text-2xl
    font-bold
    transition-all
    duration-300
  "
        >
          <span
            className="
      bg-gradient-to-r
      from-cyan-400
      to-violet-500
      bg-clip-text
      text-transparent
    "
          >
            GadgetSwap
          </span>

          <span
            className="
      absolute
      inset-0
      -z-10
      rounded-full
      opacity-0
      blur-xl
      transition-opacity
      duration-300
      group-hover:opacity-10
      bg-cyan-400
    "
          />
        </Link>

        {/* =========================
            Desktop Menu
        ========================= */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
    group
    relative
    transition
    ${
      pathname === item.href
        ? "text-cyan-400"
        : "text-white/80 hover:text-cyan-400"
    }
  `}
            >
              {item.name}
              {pathname !== item.href && (
                <span
                  className="
      absolute
      -bottom-2
      left-0
      h-[2px]
      w-0
      rounded-full
      bg-gradient-to-r from-cyan-400 to-violet-500
      transition-all
      duration-300
      group-hover:w-full
    "
                />
              )}

              {pathname === item.href && (
                <span
                  className="
        absolute
        -bottom-2
        left-0
        h-[3px]
        w-full
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        to-violet-500
        shadow-[0_0_12px_rgba(34,211,238,0.8)]
      "
                />
              )}
            </Link>
          ))}

          <ThemeToggle />

          <div className="relative">
            <button className="text-xl transition hover:scale-110">🤍</button>

            {wishlistCount > 0 && (
              <span
                className="
        absolute
        -right-2
        -top-2
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-red-500
        text-[10px]
        font-bold
        text-white
      "
              >
                {wishlistCount}
              </span>
            )}
          </div>

          <button
            onClick={() =>
              window.dispatchEvent(new Event("open-command-palette"))
            }
            className="
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-xs
              text-white/50
              backdrop-blur-xl
              transition
              hover:border-cyan-400/30
              lg:flex
            "
          >
            <span>Search...</span>

            <span
              className="
                rounded-md
                border
                border-white/10
                px-2
                py-1
                text-[10px]
              "
            >
              Ctrl K
            </span>
          </button>
        </div>

        {/* =========================
            Mobile Button
        ========================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* =========================
          Mobile Menu
      ========================= */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${
                  pathname === item.href ? "text-cyan-400" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
