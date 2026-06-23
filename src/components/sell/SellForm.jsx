"use client";

import { useState } from "react";

export default function SellForm() {
  const [checks, setChecks] = useState({
    battery: false,
    screen: false,
    body: false,
    camera: false,
    security: false,
  });

  const checkedCount = Object.values(checks).filter(Boolean).length;
  const score = checkedCount * 20;

  let conditionLabel = "Perlu Dicek";
  let conditionColor = "text-red-400";

  if (score >= 80) {
    conditionLabel = "Kondisi Premium";
    conditionColor = "text-cyan-300";
  } else if (score >= 60) {
    conditionLabel = "Kondisi Baik";
    conditionColor = "text-green-300";
  } else if (score >= 40) {
    conditionLabel = "Kondisi Cukup";
    conditionColor = "text-yellow-300";
  }

  function handleCheck(key) {
    setChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <div className="grid gap-6">
        <div>
          <label className="mb-2 block text-sm text-white/60">
            Nama Gadget
          </label>
          <input
            type="text"
            placeholder="Contoh: iPhone 15 Pro"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/60">Harga</label>
          <input
            type="text"
            placeholder="Rp 14.999.000"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/60">Deskripsi</label>
          <textarea
            rows="5"
            placeholder="Jelaskan kondisi gadget..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-cyan-400"
          />
        </div>

        {/* Pemeriksaan Kondisi */}
        <div className="mt-4">
          <h3 className="mb-5 text-xl font-semibold">
            Pemeriksaan Kondisi Gadget
          </h3>

          <div className="space-y-4">
            {[
              ["battery", "Kesehatan Baterai di atas 85%"],
              ["screen", "Layar Bebas Dead Pixel"],
              ["body", "Body Mulus Tanpa Penyok"],
              ["camera", "Kamera Berfungsi Normal"],
              ["security", "Face ID / Fingerprint Berfungsi"],
            ].map(([key, label]) => (
              <label
                key={key}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 p-4 transition hover:border-cyan-400/30"
              >
                <span>{label}</span>
                <input
                  type="checkbox"
                  checked={checks[key]}
                  onChange={() => handleCheck(key)}
                  className="h-5 w-5 accent-cyan-400"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Hasil Skor */}
        <div className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6">
          <p className="text-sm text-white/50">Skor Kondisi</p>

          <h3 className="mt-3 text-6xl font-bold">{score}%</h3>

          <p className={`mt-3 text-xl font-semibold ${conditionColor}`}>
            {conditionLabel}
          </p>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
