export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">GadgetSwap</h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Marketplace gadget premium dengan sistem rekber, COD
              terverifikasi, dan penilaian kondisi otomatis.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="mb-4 font-semibold">Marketplace</h3>

            <ul className="space-y-2 text-sm text-white/50">
              <li>Smartphone</li>
              <li>Laptop</li>
              <li>Tablet</li>
              <li>Aksesoris</li>
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
