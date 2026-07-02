export default function ShippingMethod() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-4 text-xl font-semibold">🚚 Metode Pengiriman</h2>

      <select className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none">
        <option>JNE Regular</option>
        <option>J&T Express</option>
        <option>SiCepat</option>
        <option>AnterAja</option>
      </select>
    </div>
  );
}
