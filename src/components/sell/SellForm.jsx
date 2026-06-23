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
      </div>
    </div>
  );
}
