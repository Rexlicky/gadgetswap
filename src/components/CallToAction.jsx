import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function CallToAction() {
  return (
    <section className="relative z-10 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-12 text-center backdrop-blur-xl">
          <p className="text-cyan-400">Siap Memulai?</p>

          <h2 className="mt-4 text-5xl font-bold">
            Jual atau Beli Gadget Dengan Lebih Aman
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Bergabung dengan ribuan pengguna yang sudah menggunakan GadgetSwap
            untuk transaksi gadget yang lebih aman dan transparan.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Link
                href="/marketplace"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Lihat Katalog
              </Link>
            </MagneticButton>

            <MagneticButton>
            <Link
              href="/sell"
              className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Jual Gadget
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
