export default function ProductFAQ() {
  const faqs = [
    {
      question: "Apakah barang masih tersedia?",
      answer:
        "Selama produk masih tampil di marketplace, barang masih tersedia.",
    },
    {
      question: "Apakah bisa COD?",
      answer:
        "Ya, produk ini mendukung transaksi COD sesuai kesepakatan penjual dan pembeli.",
    },
    {
      question: "Apakah bisa nego harga?",
      answer:
        "Pembeli dapat menghubungi penjual untuk melakukan negosiasi harga.",
    },
    {
      question: "Apakah ada garansi?",
      answer:
        "Garansi mengikuti kebijakan penjual dan kondisi produk yang tertera.",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Pertanyaan Umum</h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-white/10 p-5"
          >
            <h3 className="font-semibold">{faq.question}</h3>

            <p className="mt-2 text-white/60">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
