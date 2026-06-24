import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-8xl font-bold text-transparent">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold">Halaman Tidak Ditemukan</h2>

      <p className="mt-4 max-w-md text-white/60">
        Maaf, halaman yang kamu cari tidak tersedia atau mungkin sudah
        dipindahkan.
      </p>

      <Link
        href="/"
        className="
          mt-8
          rounded-full
          bg-white
          px-8
          py-4
          font-semibold
          text-black
          transition
          hover:scale-105
        "
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
