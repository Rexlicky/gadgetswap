import { Minus, Plus } from "lucide-react";

export default function CartItem({ item }) {
  async function updateQuantity(newQuantity) {
    if (newQuantity < 1) return;

    await fetch(`/api/cart/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: newQuantity,
      }),
    });

    window.location.reload();
  }

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

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              onClick={() => updateQuantity(item.quantity - 1)}
              className="
      rounded-lg
      border
      border-white/10
      p-2
      transition
      hover:bg-white/10
      hover:border-cyan-400/40
      hover:text-cyan-400
      hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
    "
            >
              <Minus size={16} />
            </button>

            <span className="w-8 text-center font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => updateQuantity(item.quantity + 1)}
              className="
      rounded-lg
      border
      border-white/10
      p-2
      transition
      hover:bg-white/10
      hover:border-cyan-400/40
      hover:text-cyan-400
      hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
    "
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
