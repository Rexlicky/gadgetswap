"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase/client";
import {
  User,
  Heart,
  ShoppingCart,
  Settings,
  LogOut,
  ChevronDown,
  Moon,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user } = useAuth();
  const { cartCount } = useCart();
  
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

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

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/");

    router.refresh();
  }

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
        <div className="ml-2 hidden items-center gap-6 text-sm md:flex">
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

          {!user ? (
            <button
              onClick={() => router.push("/auth")}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              Masuk
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 transition hover:bg-white/[0.08]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500">
                  <User size={17} />
                </div>

                <div className="text-left">
                  <p className="max-w-[100px] truncate text-sm font-semibold">
                    {user.user_metadata?.fullName || "User"}
                  </p>

                  <p className="max-w-[120px] truncate text-xs text-white/40">
                    {user.email}
                  </p>
                </div>

                <ChevronDown size={16} />
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-white/10 bg-[#0F1118] p-3 shadow-2xl backdrop-blur-xl">
                  <Link
                    href="/profile"
                    className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5"
                  >
                    <User size={18} />
                    Profil Saya
                  </Link>

                  <Link
                    href="/wishlist"
                    className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5"
                  >
                    <Heart size={18} />
                    Wishlist
                  </Link>

                  <Link
                    href="/cart"
                    className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5"
                  >
                    <ShoppingCart size={18} />
                    Keranjang
                  </Link>

                  <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5">
                    <Settings size={18} />
                    Pengaturan
                  </button>

                  <button
                    className="
    flex
    w-full
    items-center
    gap-3
    rounded-xl
    px-4
    py-3
    text-left
    text-sm
    transition
    hover:bg-white/5
  "
                  >
                    <Moon size={18} />

                    <span>Dark Mode</span>
                  </button>

                  <hr className="my-2 border-white/10" />

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl p-3 text-red-400 hover:bg-red-500/10"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <Link href="/cart" className="relative">
            <ShoppingCart
              className="
      h-6
      w-6
      text-white/70
      transition
      hover:text-cyan-400
    "
            />

            {cartCount > 0 && (
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
        bg-cyan-500
        text-[10px]
        font-bold
        text-black
      "
              >
                {cartCount}
              </span>
            )}
          </Link>

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
