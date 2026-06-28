"use client";

export default function Error({ error, reset }) {
  console.error(error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="text-5xl font-bold text-red-400">Terjadi Kesalahan</h1>

      <p className="mt-4 max-w-md text-center text-white/60">
        Maaf, terjadi kesalahan saat memuat halaman.
      </p>

      <button
        onClick={() => reset()}
        className="
          mt-8
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          px-8
          py-4
          font-semibold
          transition
          hover:scale-105
        "
      >
        Coba Lagi
      </button>
    </main>
  );
}
