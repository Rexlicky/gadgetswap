export default function CartItem({ item }) {
  const product = item.product;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.06] text-5xl">
          {product.emoji}
        </div>

        <div className="flex-1">
          <p className="text-sm text-cyan-400">{product.category}</p>

          <h3 className="mt-1 text-2xl font-bold">{product.name}</h3>

          <p className="mt-2 text-white/50">{product.description}</p>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>

          <p className="mt-2 text-sm text-white/50">Qty: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
