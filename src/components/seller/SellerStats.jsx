export default function SellerStats() {
  const stats = [
    {
      title: "Total Listing",
      value: "12",
    },
    {
      title: "Transaksi Aktif",
      value: "4",
    },
    {
      title: "Produk Terjual",
      value: "28",
    },
    {
      title: "Pendapatan",
      value: "Rp 87 Jt",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="card-hover rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <p className="text-sm text-white/50">{item.title}</p>

          <h3 className="mt-3 text-3xl font-bold">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
