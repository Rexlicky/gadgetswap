import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="page-transition min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold">Wishlist</h1>

        <p className="mt-4 text-white/60">
          Simpan produk favoritmu di sini agar mudah ditemukan kembali.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-16 text-center backdrop-blur-xl">
          <div className="text-6xl">🤍</div>

          <h2 className="mt-6 text-2xl font-semibold">Wishlist Masih Kosong</h2>

          <p className="mt-3 text-white/50">
            Produk yang kamu simpan akan muncul di halaman ini.
          </p>

          <Link
            href="/marketplace"
            className="
              mt-8
              inline-flex
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              px-6
              py-3
              font-medium
            "
          >
            Jelajahi Marketplace
          </Link>
        </div>
      </div>
    </main>
  );
}
