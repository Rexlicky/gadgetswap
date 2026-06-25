export default function ProductSafetyNotice() {
  return (
    <section className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-500/5 p-6 backdrop-blur-xl">
      <div className="flex items-start gap-4">
        <div className="text-3xl">⚠️</div>

        <div>
          <h2 className="text-xl font-bold text-yellow-300">
            Tips Keamanan Transaksi
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              • Gunakan fitur Rekber GadgetSwap untuk transaksi yang lebih aman.
            </li>

            <li>• Hindari pembayaran langsung di luar platform.</li>

            <li>
              • Periksa kondisi barang sebelum menyelesaikan transaksi COD.
            </li>

            <li>• Laporkan aktivitas mencurigakan kepada tim GadgetSwap.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
