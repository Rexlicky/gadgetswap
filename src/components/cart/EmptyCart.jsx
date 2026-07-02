export default function EmptyCart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-16 text-center">
      <div className="text-6xl">🛒</div>

      <h2 className="mt-6 text-3xl font-bold">Keranjang Masih Kosong</h2>

      <p className="mt-3 text-white/50">
        Tambahkan gadget impianmu ke keranjang.
      </p>
    </div>
  );
}
