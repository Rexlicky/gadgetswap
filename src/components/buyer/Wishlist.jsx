export default function Wishlist() {
  const wishlistItems = [
    {
      product: "iPhone 15 Pro Max",
      price: "Rp 18.500.000",
    },
    {
      product: "MacBook Air M4",
      price: "Rp 19.999.000",
    },
    {
      product: "ROG Zephyrus G16",
      price: "Rp 24.750.000",
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Wishlist Saya</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {wishlistItems.map((item) => (
          <div
            key={item.product}
            className="rounded-2xl border border-white/10 p-5 transition hover:border-cyan-400/30"
          >
            <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
              <span className="text-4xl">❤️</span>
            </div>

            <h3 className="font-semibold">{item.product}</h3>

            <p className="mt-2 text-cyan-300">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
