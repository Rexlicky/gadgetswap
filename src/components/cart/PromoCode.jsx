export default function PromoCode() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="mb-4 text-lg font-semibold">Voucher</h3>

      <div className="flex gap-3">
        <input
          placeholder="Masukkan kode promo"
          className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none"
        />

        <button className="rounded-xl bg-cyan-500 px-5 font-semibold text-black">
          Gunakan
        </button>
      </div>
    </div>
  );
}
