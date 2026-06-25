export default function ProductActions() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <button
        className="
          rounded-2xl
          border
          border-cyan-400/30
          bg-cyan-500/10
          px-6
          py-4
          font-medium
          text-cyan-300
          transition
          hover:bg-cyan-500/20
        "
      >
        💬 Chat Penjual
      </button>

      <button
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-6
          py-4
          font-medium
          transition
          hover:border-cyan-400/30
        "
      >
        🤝 Atur COD
      </button>

      <button
        className="
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          px-6
          py-4
          font-medium
          text-white
          transition
          hover:scale-[1.02]
        "
      >
        🛡️ Beli dengan Rekber
      </button>
    </div>
  );
}
