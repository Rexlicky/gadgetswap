"use client";

import { useState } from "react";

export default function EscrowActions() {
  const [confirmed, setConfirmed] = useState(false);
  const [released, setReleased] = useState(false);

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="text-2xl font-bold">Aksi Rekber</h2>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          disabled={confirmed}
          onClick={() => setConfirmed(true)}
          className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Konfirmasi Barang Diterima
        </button>

        <button
          disabled={!confirmed || released}
          onClick={() => setReleased(true)}
          className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Lepaskan Dana
        </button>
      </div>

      {confirmed && (
        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
          <p className="font-semibold text-cyan-300">
            📦 Barang telah dikonfirmasi diterima pembeli.
          </p>
        </div>
      )}

      {released && (
        <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
          <p className="font-semibold text-green-400">
            💰 Dana berhasil dilepaskan ke penjual.
          </p>
        </div>
      )}
    </div>
  );
}
