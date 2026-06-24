export default function SellerTransactions() {
  const transactions = [
    {
      buyer: "Raka Pratama",
      product: "iPhone 15 Pro",
      amount: "Rp 14.999.000",
      status: "Selesai",
    },
    {
      buyer: "Andi Saputra",
      product: "MacBook Pro M3",
      amount: "Rp 28.500.000",
      status: "Dalam Rekber",
    },
    {
      buyer: "Dewi Lestari",
      product: "Galaxy S25 Ultra",
      amount: "Rp 16.999.000",
      status: "Menunggu Pembayaran",
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Riwayat Transaksi</h2>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="rounded-2xl border border-white/10 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold">{transaction.product}</h3>

                <p className="mt-1 text-sm text-white/50">
                  Pembeli: {transaction.buyer}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{transaction.amount}</p>

                <span className="mt-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                  {transaction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
