export default function FeaturedGadgets() {
  return (
    <div className="pb-32">
      <div className="mb-12 text-center">
        <p className="text-cyan-400">Etalase Marketplace</p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Gadget Pilihan</h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Temukan gadget premium yang telah diverifikasi dengan perlindungan
          rekber dan penilaian kondisi transparan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Produk 1 */}
        <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
            <span className="text-7xl">📱</span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="font-semibold">iPhone 15 Pro</h3>
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
              96%
            </span>
          </div>

          <p className="mt-3 text-xl font-bold">Rp 14.999.000</p>

          <p className="mt-2 text-sm text-white/50">Dilindungi Rekber</p>
        </div>

        {/* Produk 2 */}
        <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-400/40">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10">
            <span className="text-7xl">💻</span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="font-semibold">MacBook Pro M3</h3>
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
              98%
            </span>
          </div>

          <p className="mt-3 text-xl font-bold">Rp 28.500.000</p>

          <p className="mt-2 text-sm text-white/50">Penjual Terverifikasi</p>
        </div>

        {/* Produk 3 */}
        <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/40">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
            <span className="text-7xl">📱</span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Galaxy S25 Ultra</h3>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
              95%
            </span>
          </div>

          <p className="mt-3 text-xl font-bold">Rp 16.999.000</p>

          <p className="mt-2 text-sm text-white/50">COD Tersedia</p>
        </div>

        {/* Produk 4 */}
        <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400/40">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10">
            <span className="text-7xl">💻</span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="font-semibold">ROG Zephyrus G16</h3>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
              94%
            </span>
          </div>

          <p className="mt-3 text-xl font-bold">Rp 24.750.000</p>

          <p className="mt-2 text-sm text-white/50">Dilindungi Rekber</p>
        </div>
      </div>
    </div>
  );
}
