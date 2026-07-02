"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

export default function ProductActions({ productId }) {
  const [loadingCart, setLoadingCart] = useState(false);

  async function handleAddToCart() {
    setLoadingCart(true);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        toast.error("Gagal menambahkan produk ke keranjang.");
        return;
      }

      toast.success("Produk berhasil ditambahkan ke keranjang.");
    } finally {
      setLoadingCart(false);
    }
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <button className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-4 font-medium text-cyan-300 transition hover:bg-cyan-500/20">
        💬 Chat Penjual
      </button>

      <button
        onClick={handleAddToCart}
        disabled={loadingCart}
        className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-medium text-white transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loadingCart ? "Menambahkan..." : "🛒 Tambah Keranjang"}
      </button>

      <Link
        href="/checkout"
        className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 text-center font-medium text-white transition hover:scale-[1.02]"
      >
        ⚡ Beli Sekarang
      </Link>
    </div>
  );
}
