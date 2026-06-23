export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">GadgetSwap</h1>

          <div className="flex gap-8 text-sm text-white/80">
            <a href="#">Marketplace</a>
            <a href="#">Sell</a>
            <a href="#">Escrow</a>
            <a href="#">About</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="text-cyan-400 font-medium mb-4">
            Premium Gadget Marketplace
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Buy & Sell
            <br />
            Gadgets Safely
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Secure transactions with escrow protection, verified COD planning,
            and intelligent gadget condition scoring.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              Explore Marketplace
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
              Sell Your Gadget
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}