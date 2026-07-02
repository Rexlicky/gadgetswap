export default function OrderSummary({ subtotal = 0 }) {
  const rekberFee = subtotal > 0 ? 15000 : 0;
  const total = subtotal + rekberFee;

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold">Ringkasan Pesanan</h3>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Diskon</span>
          <span>-</span>
        </div>

        <div className="flex justify-between">
          <span>Rekber</span>
          <span>{formatPrice(rekberFee)}</span>
        </div>
      </div>

      <hr className="my-6 border-white/10" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 font-semibold">
        Checkout
      </button>
    </div>
  );
}
