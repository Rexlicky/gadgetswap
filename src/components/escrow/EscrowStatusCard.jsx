export default function EscrowStatusCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/50">Status Transaksi</p>

          <h2 className="mt-2 text-3xl font-bold">Dana Ditahan</h2>
        </div>

        <div className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm text-yellow-300">
          Menunggu Konfirmasi
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-white/50">Nilai Transaksi</p>

        <h3 className="mt-2 text-4xl font-bold text-cyan-300">Rp 14.999.000</h3>
      </div>
    </div>
  );
}
