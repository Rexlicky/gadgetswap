export default function SellForm() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <div className="grid gap-6">
        <div>
          <label className="mb-2 block text-sm text-white/60">
            Nama Gadget
          </label>

          <input
            type="text"
            placeholder="Contoh: iPhone 15 Pro"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/60">Harga</label>

          <input
            type="text"
            placeholder="Rp 14.999.000"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/60">Deskripsi</label>

          <textarea
            rows="5"
            placeholder="Jelaskan kondisi gadget..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        {/* =========================
            Pemeriksaan Kondisi
        ========================= */}

        <div className="mt-8">
          <h3 className="mb-5 text-xl font-semibold">
            Pemeriksaan Kondisi Gadget
          </h3>

          <div className="space-y-4">
            <label className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
              <span>Kesehatan Baterai di atas 85%</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
              <span>Layar Bebas Dead Pixel</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
              <span>Body Mulus Tanpa Penyok</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
              <span>Kamera Berfungsi Normal</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
              <span>Face ID / Fingerprint Berfungsi</span>
              <input type="checkbox" />
            </label>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-violet-500
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            Analisis Kondisi
          </button>
        </div>
      </div>
    </div>
  );
}
