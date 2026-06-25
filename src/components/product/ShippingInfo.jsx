export default function ShippingInfo() {
  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Informasi Pengiriman</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
          <span className="text-white/50">📍 Lokasi Barang</span>

          <span className="font-medium">Bandar Lampung</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
          <span className="text-white/50">🚚 Estimasi Pengiriman</span>

          <span className="font-medium">1 - 3 Hari</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
          <span className="text-white/50">🤝 COD</span>

          <span className="font-medium text-green-400">Tersedia</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 p-4">
          <span className="text-white/50">🛡️ Rekber</span>

          <span className="font-medium text-cyan-300">Didukung</span>
        </div>
      </div>
    </section>
  );
}
