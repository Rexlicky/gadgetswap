"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          GadgetSwap
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm text-white/80 md:flex">
          <Link href="/" className="transition hover:text-cyan-400">
            Beranda
          </Link>

          <Link href="/marketplace" className="transition hover:text-cyan-400">
            Katalog
          </Link>

          <Link href="/sell" className="transition hover:text-cyan-400">
            Jual
          </Link>

          <Link href="/escrow" className="transition hover:text-cyan-400">
            Rekber
          </Link>

          <Link href="/seller" className="transition hover:text-cyan-400">
            Penjual
          </Link>

          <Link href="/buyer" className="transition hover:text-cyan-400">
            Pembeli
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link href="/" className="py-3" onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>

            <Link
              href="/marketplace"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Katalog
            </Link>

            <Link
              href="/sell"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Jual
            </Link>

            <Link
              href="/escrow"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Rekber
            </Link>

            <Link
              href="/seller"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Penjual
            </Link>

            <Link
              href="/buyer"
              className="py-3"
              onClick={() => setMenuOpen(false)}
            >
              Pembeli
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
