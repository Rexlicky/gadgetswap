export default function TrustIndicators() {
  const indicators = [
    {
      icon: "🛡️",
      title: "Rekber Aman",
      description: "Dana ditahan hingga barang diterima pembeli.",
    },
    {
      icon: "✅",
      title: "Penjual Terverifikasi",
      description: "Identitas dan aktivitas penjual telah diverifikasi.",
    },
    {
      icon: "📦",
      title: "Garansi Produk",
      description: "Perlindungan untuk produk yang tidak sesuai deskripsi.",
    },
    {
      icon: "🤝",
      title: "COD Tersedia",
      description: "Bisa bertemu langsung di lokasi yang disepakati.",
    },
  ];

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {indicators.map((item) => (
        <div
          key={item.title}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-5
            backdrop-blur-xl
          "
        >
          <div className="mb-3 text-3xl">{item.icon}</div>

          <h3 className="font-semibold">{item.title}</h3>

          <p className="mt-2 text-sm text-white/50">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
