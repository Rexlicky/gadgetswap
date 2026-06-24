export default function BuyerOrders() {
  const orders = [
    {
      product: "iPhone 15 Pro",
      seller: "Dimas Gadget",
      price: "Rp 14.999.000",
      status: "Dalam Rekber",
    },
    {
      product: "MacBook Pro M3",
      seller: "Tech Store",
      price: "Rp 28.500.000",
      status: "Barang Dikirim",
    },
    {
      product: "Galaxy S25 Ultra",
      seller: "Premium Gadget",
      price: "Rp 16.999.000",
      status: "Menunggu Pembayaran",
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Pesanan Saya</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.product}
            className="rounded-2xl border border-white/10 p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold">{order.product}</h3>

                <p className="mt-1 text-sm text-white/50">
                  Penjual: {order.seller}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{order.price}</p>

                <span className="mt-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
