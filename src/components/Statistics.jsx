import AnimatedCounter from "./AnimatedCounter";

export default function Statistics() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-28 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
        <h3 className="text-3xl font-bold">
          <AnimatedCounter end={25} suffix="K+" />
        </h3>
        <p className="mt-2 text-sm text-white/50">Pengguna Aktif</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
        <h3 className="text-3xl font-bold">
          <AnimatedCounter end={12} suffix="K+" />
        </h3>
        <p className="mt-2 text-sm text-white/50">Transaksi</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
        <h3 className="text-3xl font-bold">
          <AnimatedCounter end={98} suffix="%" />
        </h3>
        <p className="mt-2 text-sm text-white/50">
          Tingkat Keberhasilan Rekber
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
        <h3 className="text-3xl font-bold">
          <AnimatedCounter end={4} suffix=".9★" />
        </h3>
        <p className="mt-2 text-sm text-white/50">Rating Pengguna</p>
      </div>
    </div>
  );
}
