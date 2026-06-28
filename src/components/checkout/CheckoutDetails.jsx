export default function CheckoutDetails() {
  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-2">
      {/* Payment Method */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-2xl font-bold">Metode Pembayaran</h2>

        <div className="mt-6 space-y-4">
          <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
            <span>Virtual Account</span>
            <input type="radio" name="payment" defaultChecked />
          </label>

          <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 p-4">
            <span>E-Wallet</span>
            <input type="radio" name="payment" />
          </label>

          <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 p-4">
            <span>Transfer Bank Manual</span>
            <input type="radio" name="payment" />
          </label>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-2xl font-bold">Alamat Pengiriman</h2>

        <div className="mt-6 rounded-2xl border border-white/10 p-5">
          <p className="font-semibold">Rexlicky Verdhika Sagatha</p>
          <p className="mt-2 text-white/60">
            Bandar Lampung, Lampung, Indonesia
          </p>
          <p className="mt-2 text-sm text-white/40">
            Estimasi pengiriman: 1 - 3 hari
          </p>
        </div>
      </div>

      {/* Cost Summary */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
        <h2 className="text-2xl font-bold">Ringkasan Biaya</h2>

        <div className="mt-6 space-y-4 text-white/70">
          <div className="flex justify-between">
            <span>Harga Produk</span>
            <span>Rp 14.999.000</span>
          </div>

          <div className="flex justify-between">
            <span>Biaya Rekber</span>
            <span>Rp 25.000</span>
          </div>

          <div className="flex justify-between">
            <span>Ongkir</span>
            <span>Rp 35.000</span>
          </div>

          <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span className="text-cyan-300">Rp 15.059.000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
