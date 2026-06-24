export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="loading-glow h-24 w-24 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />

      <h1 className="mt-8 text-4xl font-bold">GadgetSwap</h1>

      <p className="mt-3 text-white/50">Memuat pengalaman terbaik...</p>
    </div>
  );
}
