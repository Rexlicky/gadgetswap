import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          GadgetSwap
        </Link>

        {/* Menu */}
        <div className="flex gap-8 text-sm text-white/80">
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
      </div>
    </nav>
  );
}
