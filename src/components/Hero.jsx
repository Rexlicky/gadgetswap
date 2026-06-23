export default function Hero() {
  return (
    <>
      {/* Hero Badge */}
      <p className="mb-4 font-medium text-cyan-400">
        Marketplace Gadget Premium
      </p>

      {/* Hero Title */}
      <h1 className="text-6xl leading-tight font-bold md:text-8xl">
        Jual Beli Gadget
        <br />
        Dengan Aman
      </h1>

      {/* Hero Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
        Nikmati transaksi aman dengan sistem rekber, perencanaan COD
        terverifikasi, dan penilaian kondisi gadget secara otomatis.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
          Lihat Katalog
        </button>

        <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10">
          Jual Gadget
        </button>
      </div>
    </>
  );
}
