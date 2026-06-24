export default function SellerListings() {
  const listings = [
    {
      name: "iPhone 15 Pro",
      price: "Rp 14.999.000",
      status: "Aktif",
    },
    {
      name: "MacBook Pro M3",
      price: "Rp 28.500.000",
      status: "Terjual",
    },
    {
      name: "Galaxy S25 Ultra",
      price: "Rp 16.999.000",
      status: "Dalam Rekber",
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Listing Saya</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="pb-4">Produk</th>
              <th className="pb-4">Harga</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {listings.map((item) => (
              <tr key={item.name} className="border-b border-white/5">
                <td className="py-4">{item.name}</td>

                <td className="py-4">{item.price}</td>

                <td className="py-4">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
