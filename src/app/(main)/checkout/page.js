"use client";
import Link from "next/link";
import TransactionTimeline from "@/components/checkout/TransactionTimeline";
import CheckoutDetails from "@/components/checkout/CheckoutDetails";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderNote from "@/components/checkout/OrderNote";
import { useState } from "react";
import ReceiverInformation from "@/components/checkout/ReceiverInformation";

export default function CheckoutPage() {
  const [receiver, setReceiver] = useState({
    name: "",
    phone: "",
  });

  const isFormValid =
    receiver.name.trim() !== "" && receiver.phone.trim() !== "";
  
  return (
    <main className="page-transition min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Checkout Rekber</p>

        <h1 className="mt-3 text-5xl font-bold">Selesaikan Transaksi Aman</h1>

        <p className="mt-4 text-white/60">
          Dana akan ditahan oleh sistem sampai barang diterima dan dikonfirmasi
          oleh pembeli.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">Ringkasan Produk</h2>

            <div className="mt-6 rounded-2xl border border-white/10 p-5">
              <div className="text-6xl">📱</div>

              <h3 className="mt-4 text-xl font-semibold">iPhone 15 Pro</h3>

              <p className="mt-2 text-white/50">Dilindungi Rekber</p>

              <p className="mt-4 text-3xl font-bold text-cyan-300">
                Rp 14.999.000
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">Alur Rekber</h2>

            <div className="mt-6 space-y-4">
              {[
                "Pembeli melakukan pembayaran",
                "Dana ditahan oleh sistem",
                "Penjual mengirim barang",
                "Pembeli konfirmasi barang diterima",
                "Dana dilepas ke penjual",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                    {index + 1}
                  </div>

                  <p className="text-white/70">{step}</p>
                </div>
              ))}
            </div>

            <Link
              href="/escrow"
              className="mt-8 block rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 text-center font-semibold transition hover:scale-[1.02]"
            >
              Mulai Rekber
            </Link>
          </div>
        </div>
        <ReceiverInformation receiver={receiver} setReceiver={setReceiver} />

        <TransactionTimeline />

        <CheckoutDetails isFormValid={isFormValid} />

        <ShippingAddress />

        <ShippingMethod />

        <PaymentMethod />

        <OrderNote />

        <div className="mt-10">
          <button
            disabled={!isFormValid}
            className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-violet-500
      py-4
      text-lg
      font-semibold
      transition
      hover:scale-[1.02]
      disabled:cursor-not-allowed
      disabled:opacity-40
    "
          >
            Buat Pesanan
          </button>
        </div>
      </div>
    </main>
  );
}
