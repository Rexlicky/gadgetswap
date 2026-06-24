import SellerStats from "@/components/seller/SellerStats";
import SellerListings from "@/components/seller/SellerListings";
import SellerTransactions from "@/components/seller/SellerTransactions";

export default function SellerPage() {
    return (
      <main className="page-transition min-h-screen bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-12">
            <p className="text-cyan-400">Dashboard Penjual</p>

            <h1 className="mt-3 text-5xl font-bold">Kelola Listing Anda</h1>

            <p className="mt-4 text-white/60">
              Pantau produk, transaksi, dan performa penjualan.
            </p>
          </div>
          <SellerStats />
          <SellerListings />
          <SellerTransactions />
        </div>
      </main>
    );
}
