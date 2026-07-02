export default function ShippingAddress() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-4 text-xl font-semibold">📍 Alamat Pengiriman</h2>

      <input
        type="text"
        placeholder="Masukkan alamat lengkap"
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none"
      />
    </div>
  );
}
