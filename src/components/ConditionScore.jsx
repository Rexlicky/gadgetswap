export default function ConditionScore() {
  return (
    <div className="pb-32">
      <div className="mb-12 text-center">
        <p className="text-cyan-400">Pengecek Kondisi Gadget</p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Skor Kondisi Otomatis
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Penjual dapat melakukan simulasi pengecekan perangkat untuk
          menghasilkan skor kondisi yang transparan sebelum gadget ditampilkan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Form Pemeriksaan */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
          <h3 className="text-2xl font-semibold">Pemeriksaan Perangkat</h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="font-medium">Kesehatan Baterai</p>
                <p className="text-sm text-white/50">Minimal 85% disarankan</p>
              </div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                98%
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="font-medium">Kondisi Layar</p>
                <p className="text-sm text-white/50">
                  Tidak ada dead pixel atau burn-in
                </p>
              </div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                Lolos
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="font-medium">Bodi & Frame</p>
                <p className="text-sm text-white/50">
                  Lecet ringan masih dapat diterima
                </p>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                Sangat Baik
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="font-medium">Fungsi Hardware</p>
                <p className="text-sm text-white/50">
                  Kamera, speaker, charging, dan tombol
                </p>
              </div>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                Normal
              </span>
            </div>
          </div>
        </div>

        {/* Hasil Skor */}
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 text-left backdrop-blur-2xl">
          <p className="text-sm text-white/50">Skor Dihasilkan</p>

          <h3 className="mt-4 text-7xl font-bold">96%</h3>

          <p className="mt-4 text-xl font-semibold text-cyan-300">
            Kondisi Premium
          </p>

          <p className="mt-4 leading-7 text-white/60">
            Gadget ini masuk kategori kondisi premium berdasarkan kesehatan
            baterai, kualitas layar, kondisi fisik, dan fungsi hardware utama.
          </p>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/[0.05] p-4">
              <p className="text-sm text-white/50">Kepercayaan Listing</p>
              <p className="mt-2 text-xl font-bold">Tinggi</p>
            </div>

            <div className="rounded-2xl bg-white/[0.05] p-4">
              <p className="text-sm text-white/50">Keyakinan Pembeli</p>
              <p className="mt-2 text-xl font-bold">Kuat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
