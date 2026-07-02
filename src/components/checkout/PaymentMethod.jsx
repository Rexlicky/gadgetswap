export default function PaymentMethod() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-4 text-xl font-semibold">💳 Metode Pembayaran</h2>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input type="radio" name="payment" defaultChecked />
          Transfer Bank
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="payment" />
          QRIS
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="payment" />
          E-Wallet
        </label>
      </div>
    </div>
  );
}
