export default function ProductCard({ emoji, name, price, score, badge }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
      <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
        <span className="text-7xl">{emoji}</span>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
          {score}
        </span>
      </div>

      <p className="mt-3 text-xl font-bold">{price}</p>

      <p className="mt-2 text-sm text-white/50">{badge}</p>
    </div>
  );
}
