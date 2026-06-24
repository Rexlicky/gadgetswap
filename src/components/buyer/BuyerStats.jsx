export default function BuyerStats() {
  const stats = [
    {
      title: "Pesanan Aktif",
      value: "3",
    },
    {
      title: "Transaksi Rekber",
      value: "2",
    },
    {
      title: "Favorit",
      value: "12",
    },
    {
      title: "Total Pembelian",
      value: "Rp 43 Jt",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <p className="text-sm text-white/50">{item.title}</p>

          <h3 className="mt-3 text-3xl font-bold">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
