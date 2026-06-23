export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold">GadgetSwap</h1>

        {/* Menu */}
        <div className="flex gap-8 text-sm text-white/80">
          <a href="#" className="transition hover:text-cyan-400">
            Katalog
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Jual
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Rekber
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Tentang
          </a>
        </div>
      </div>
    </nav>
  );
}
