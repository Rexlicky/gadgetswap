export default function OrderSummary() {
  return (
    <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold">Ringkasan Pesanan</h3>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp0</span>
        </div>

        <div className="flex justify-between">
          <span>Diskon</span>
          <span>-</span>
        </div>

        <div className="flex justify-between">
          <span>Rekber</span>
          <span>Rp0</span>
        </div>
      </div>

      <hr className="my-6 border-white/10" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>

        <span>Rp0</span>
      </div>

      <button
        className="
mt-6
w-full
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-violet-500
py-4
font-semibold
"
      >
        Checkout
      </button>
    </div>
  );
}
