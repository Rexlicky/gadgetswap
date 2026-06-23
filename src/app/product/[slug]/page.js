export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-32 lg:grid-cols-2">
        {/* Product Preview */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
            <span className="text-9xl">📱</span>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-cyan-400">Smartphone Premium</p>

          <h1 className="mt-3 text-5xl font-bold">iPhone 15 Pro</h1>

          <p className="mt-4 text-3xl font-bold">Rp 14.999.000</p>

          <p className="mt-6 leading-7 text-white/60">
            iPhone 15 Pro bekas premium dengan kondisi sangat baik, baterai
            sehat, layar normal, dan transaksi dilindungi sistem rekber.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/50">Skor Kondisi</p>
              <h3 className="mt-2 text-3xl font-bold text-cyan-300">96%</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/50">Rekber</p>
              <h3 className="mt-2 text-3xl font-bold text-green-400">Aktif</h3>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">
              Beli dengan Rekber
            </button>

            <button className="rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/10">
              Atur COD
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
