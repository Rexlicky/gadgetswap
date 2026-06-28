import Link from "next/link";

export default function SellerCard() {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-2xl">
          👨‍💼
        </div>

        <div>
          <h3 className="font-semibold text-lg">Gadget Store Official</h3>

          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm text-green-400">Online</span>
          </div>

          <p className="mt-1 text-sm text-white/50">Penjual Terverifikasi</p>

          <p className="mt-1 text-xs text-cyan-400">
            Membalas dalam &lt; 5 menit
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
          🏆 Top Seller
        </span>

        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          ⚡ Fast Response
        </span>

        <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">
          🛡️ Rekber Trusted
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-white/50">Rating</p>

          <h4 className="mt-1 font-semibold text-yellow-400">⭐ 4.9</h4>
        </div>

        <div>
          <p className="text-sm text-white/50">Transaksi</p>

          <h4 className="mt-1 font-semibold">1.250+</h4>
        </div>

        <div>
          <p className="text-sm text-white/50">Bergabung</p>

          <h4 className="mt-1 font-semibold">2022</h4>
        </div>
      </div>

      <Link
        href="/seller/profile"
        className="
    mt-6
    block
    w-full
    rounded-2xl
    border
    border-cyan-400/20
    bg-cyan-500/10
    py-3
    text-center
    text-cyan-300
    transition
    hover:bg-cyan-500/20
  "
      >
        Lihat Profil Penjual
      </Link>
    </div>
  );
}
