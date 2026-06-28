export const metadata = {
  title: "Riwayat Transaksi",
};

export default function BuyerHistoryPage() {
  const transactions = [
    {
      id: "#GS24001",
      product: "iPhone 15 Pro",
      price: "Rp 14.999.000",
      status: "Sedang Dikirim",
    },
    {
      id: "#GS24002",
      product: "MacBook Air M4",
      price: "Rp 19.999.000",
      status: "Selesai",
    },
    {
      id: "#GS24003",
      product: "iPad Air M2",
      price: "Rp 11.499.000",
      status: "Menunggu Pembayaran",
    },
  ];

  return (
    <main className="page-transition min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-cyan-400">Dashboard Pembeli</p>

        <h1 className="mt-3 text-5xl font-bold">Riwayat Transaksi</h1>

        <p className="mt-4 text-white/60">
          Pantau semua transaksi dan status pembelianmu di GadgetSwap.
        </p>

        <div className="mt-12 space-y-5">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-white/50">{item.id}</p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    {item.product}
                  </h2>

                  <p className="mt-2 text-cyan-300 font-bold">{item.price}</p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                  "
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
