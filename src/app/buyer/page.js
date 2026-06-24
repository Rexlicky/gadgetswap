import BuyerStats from "@/components/buyer/BuyerStats";

export default function BuyerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12">
          <p className="text-cyan-400">Dashboard Pembeli</p>

          <h1 className="mt-3 text-5xl font-bold">Aktivitas Pembelian</h1>

          <p className="mt-4 text-white/60">
            Pantau pesanan, transaksi rekber, dan gadget favorit Anda.
          </p>
        </div>

        <BuyerStats />
      </div>
    </main>
  );
}
