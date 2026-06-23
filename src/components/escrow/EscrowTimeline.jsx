"use client";

import { useState } from "react";

export default function EscrowTimeline() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    "Pembayaran Diterima",
    "Dana Ditahan Sistem",
    "Barang Dikirim",
    "Pembeli Konfirmasi",
    "Dana Dilepas",
  ];

  function handleNextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Timeline Rekber</h2>

        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
          className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Lanjutkan Status
        </button>
      </div>

      <div className="mt-8 space-y-5">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step} className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  isActive
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                    : "border-white/10 bg-white/[0.04] text-white/40"
                }`}
              >
                {index + 1}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{step}</h3>
                <p className="text-sm text-white/50">
                  {isCurrent
                    ? "Sedang Berjalan"
                    : isActive
                      ? "Selesai"
                      : "Menunggu"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
