export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =========================
          AURORA BACKGROUND
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* =========================
          NAVBAR
      ========================== */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/[0.03] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">GadgetSwap</h1>

          <div className="flex gap-8 text-sm text-white/80">
            <a href="#">Marketplace</a>
            <a href="#">Sell</a>
            <a href="#">Escrow</a>
            <a href="#">About</a>
          </div>
        </div>
      </nav>

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-32">
        <div className="max-w-5xl text-center">
          {/* Hero Badge */}
          <p className="mb-4 font-medium text-cyan-400">
            Premium Gadget Marketplace
          </p>

          {/* Hero Title */}
          <h1 className="text-6xl leading-tight font-bold md:text-8xl">
            Buy & Sell
            <br />
            Gadgets Safely
          </h1>

          {/* Hero Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Secure transactions with escrow protection, verified COD planning,
            and intelligent gadget condition scoring.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Explore Marketplace
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10">
              Sell Your Gadget
            </button>
          </div>

          {/* =========================
              FEATURE CARDS
          ========================== */}
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

          {/* =========================
              FLOATING GADGET MOCKUP
          ========================== */}
          <div className="mt-12 flex justify-center pb-24">
            <div className="relative h-[520px] w-[340px] rounded-[2.4rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-2xl">
              <div className="h-full w-full rounded-[2.4rem] border border-white/10 bg-black/60 p-5">
                {/* Phone Speaker */}
                <div className="mx-auto mb-6 h-6 w-24 rounded-full bg-white/10" />

                {/* Phone Content */}
                <div className="space-y-4">
                  <div className="rounded-3xl bg-white/[0.08] p-4">
                    <p className="text-xs text-white/40">Featured Device</p>
                    <h3 className="mt-2 text-lg font-semibold">
                      iPhone 15 Pro
                    </h3>
                    <p className="mt-1 text-sm text-cyan-400">
                      Condition Score 96%
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/[0.07] p-3">
                      <p className="text-xs text-white/40">Battery</p>
                      <p className="mt-1 font-semibold">98%</p>
                    </div>

                    <div className="rounded-2xl bg-white/[0.07] p-3">
                      <p className="text-xs text-white/40">Escrow</p>
                      <p className="mt-1 font-semibold text-green-400">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-r from-cyan-400/20 to-violet-500/20 p-4">
                    <p className="text-xs text-white/50">Safe meetup point</p>
                    <p className="mt-1 text-sm font-semibold">
                      Mall Central Lobby
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Funds */}
              <div className="absolute top-16 -right-10 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-white/50">Funds Held</p>
                <p className="text-sm font-semibold text-cyan-300">
                  Rp 14.999.000
                </p>
              </div>

              {/* Floating Badge - COD */}
              <div className="absolute bottom-20 -left-12 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-white/50">Verified COD</p>
                <p className="text-sm font-semibold text-violet-300">2.4 km</p>
              </div>
            </div>
          </div>

          {/* =========================
              STATISTICS SECTION
          ========================== */}
          <div className="grid grid-cols-2 gap-4 pb-28 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-2 text-sm text-white/50">Active Users</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold">12K+</h3>
              <p className="mt-2 text-sm text-white/50">Transactions</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="mt-2 text-sm text-white/50">Escrow Success Rate</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold">4.9★</h3>
              <p className="mt-2 text-sm text-white/50">User Rating</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
