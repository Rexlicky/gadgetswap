export const metadata = {
  title: "Profil Penjual",
};

export default function SellerProfilePage() {
  return (
    <main className="page-transition min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-5xl">
            👨‍💼
          </div>

          <h1 className="mt-6 text-5xl font-bold">Gadget Store Official</h1>

          <p className="mt-3 text-white/60">
            Penjual gadget premium dengan transaksi aman melalui Rekber
            GadgetSwap.
          </p>
        </div>

        {/* Statistik */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <h2 className="text-3xl font-bold text-cyan-400">4.9</h2>
            <p className="mt-2 text-white/50">Rating</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <h2 className="text-3xl font-bold text-cyan-400">1.250+</h2>
            <p className="mt-2 text-white/50">Transaksi</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <h2 className="text-3xl font-bold text-cyan-400">2022</h2>
            <p className="mt-2 text-white/50">Bergabung</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400">98%</h2>
            <p className="mt-2 text-white/50">Tingkat Kepuasan</p>
          </div>
        </div>

        {/* Tentang */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-bold">Tentang Penjual</h2>

          <p className="mt-4 leading-8 text-white/60">
            Gadget Store Official merupakan penjual gadget premium yang berfokus
            pada produk original, kondisi transparan, dan transaksi aman
            menggunakan sistem Rekber GadgetSwap.
          </p>
        </section>
      </div>
    </main>
  );
}
