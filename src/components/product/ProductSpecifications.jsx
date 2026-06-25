export default function ProductSpecifications() {
  const specs = [
    {
      label: "RAM",
      value: "8 GB",
    },
    {
      label: "Storage",
      value: "256 GB",
    },
    {
      label: "Layar",
      value: "6.1 Inch OLED",
    },
    {
      label: "Chipset",
      value: "Apple A18 Pro",
    },
    {
      label: "Baterai",
      value: "4200 mAh",
    },
    {
      label: "Warna",
      value: "Natural Titanium",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Spesifikasi Produk</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
          >
            <span className="text-white/50">{spec.label}</span>

            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
