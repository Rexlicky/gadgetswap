export default function FAQ() {
  const faqs = [
    {
      question: "Apa itu sistem rekber?",
      answer:
        "Dana pembeli ditahan sementara hingga barang diterima dan dikonfirmasi.",
    },
    {
      question: "Bagaimana COD terverifikasi bekerja?",
      answer:
        "Sistem akan merekomendasikan titik temu aman berdasarkan lokasi pembeli dan penjual.",
    },
    {
      question: "Bagaimana skor kondisi dihitung?",
      answer:
        "Skor dihitung berdasarkan checklist pemeriksaan perangkat yang diisi penjual.",
    },
    {
      question: "Apakah semua penjual terverifikasi?",
      answer:
        "Penjual dapat mengajukan verifikasi identitas untuk meningkatkan kepercayaan pembeli.",
    },
  ];

  return (
    <section className="relative z-10 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-center text-cyan-400">Pertanyaan Umum</p>

        <h2 className="mt-3 text-center text-5xl font-bold">FAQ</h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <h3 className="font-semibold">{faq.question}</h3>

              <p className="mt-3 text-white/60">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
