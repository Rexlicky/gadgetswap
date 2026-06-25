export default function ProductReviews() {
  const reviews = [
    {
      name: "Andi Saputra",
      rating: 5,
      comment: "Barang sesuai deskripsi, pengiriman cepat dan aman.",
    },
    {
      name: "Dewi Lestari",
      rating: 5,
      comment: "Kondisi produk masih sangat bagus, seller responsif.",
    },
    {
      name: "Raka Pratama",
      rating: 4,
      comment: "Produk bagus, hanya pengiriman sedikit terlambat.",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold">Review Pembeli</h2>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{review.name}</h3>

              <span className="text-yellow-400">
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p className="mt-3 text-white/60">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
