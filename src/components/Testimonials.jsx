export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi Saputra",
      role: "Pembeli",
      text: "Proses rekber sangat aman. Barang sampai sesuai deskripsi dan transaksi berjalan lancar.",
    },
    {
      name: "Dewi Lestari",
      role: "Penjual",
      text: "Fitur skor kondisi membantu pembeli lebih percaya terhadap produk yang saya jual.",
    },
    {
      name: "Raka Pratama",
      role: "Pembeli",
      text: "UI website modern dan mudah digunakan. Pengalaman jual beli jadi lebih nyaman.",
    },
  ];

  return (
    <section className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-cyan-400">Testimoni Pengguna</p>

        <h2 className="mt-3 text-center text-5xl font-bold">
          Apa Kata Mereka?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="card-hover rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="mb-4 text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="leading-7 text-white/60">&quot;{item.text}&quot;</p>

              <div className="mt-6">
                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-sm text-cyan-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
