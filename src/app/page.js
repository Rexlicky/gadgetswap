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
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
              <p className="text-sm text-cyan-400">01</p>
              <h3 className="mt-4 text-xl font-semibold">Escrow Protection</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Buyer funds are safely held until the gadget is confirmed as
                received.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
              <p className="text-sm text-violet-400">02</p>
              <h3 className="mt-4 text-xl font-semibold">Verified COD</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Plan safer meetups with recommended public meeting points.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
              <p className="text-sm text-blue-400">03</p>
              <h3 className="mt-4 text-xl font-semibold">Condition Score</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Gadget condition is scored from battery health, screen, body,
                and hardware checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}