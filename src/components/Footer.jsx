export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-white/[0.02] py-12 backdrop-blur-xl">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-2xl font-bold text-transparent">
              GadgetSwap
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Marketplace gadget premium dengan sistem rekber, COD
              terverifikasi, dan penilaian kondisi otomatis.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="mb-4 font-semibold">Marketplace</h3>

            <ul className="space-y-2 text-sm text-white/50">
              <li className="transition hover:text-cyan-400">Smartphone</li>
              <li className="transition hover:text-cyan-400">Laptop</li>
              <li className="transition hover:text-cyan-400">Tablet</li>
              <li className="transition hover:text-cyan-400">Aksesoris</li>
            </ul>
          </div>

          {/* Fitur */}
          <div>
            <h3 className="mb-4 font-semibold">Fitur</h3>

            <ul className="space-y-2 text-sm text-white/50">
              <li>Rekber</li>
              <li>COD Terverifikasi</li>
              <li>Skor Kondisi</li>
              <li>Penjual Terverifikasi</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-4 font-semibold">Kontak</h3>

            <ul className="space-y-2 text-sm text-white/50">
              <li>support@gadgetswap.id</li>
              <li>+62 812 3456 7890</li>
              <li>Bandar Lampung</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-md border-t border-white/10 pt-8 text-center text-sm text-white/40">
            © 2026 GadgetSwap. Semua Hak Dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
}
