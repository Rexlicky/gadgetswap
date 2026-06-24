"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

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
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <span className="text-cyan-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
