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
          {/* =========================
    FEATURED GADGETS
========================== */}
          <div className="pb-32">
            <div className="mb-12 text-center">
              <p className="text-cyan-400">Marketplace Showcase</p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Featured Gadgets
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                Discover premium verified devices protected by escrow and
                condition scoring.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Product 1 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                  <span className="text-7xl">📱</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">iPhone 15 Pro</h3>
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                    96%
                  </span>
                </div>

                <p className="mt-3 text-xl font-bold">Rp 14.999.000</p>

                <p className="mt-2 text-sm text-white/50">Escrow Protected</p>
              </div>

              {/* Product 2 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-400/40">
                <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10">
                  <span className="text-7xl">💻</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">MacBook Pro M3</h3>
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
                    98%
                  </span>
                </div>

                <p className="mt-3 text-xl font-bold">Rp 28.500.000</p>

                <p className="mt-2 text-sm text-white/50">Verified Seller</p>
              </div>

              {/* Product 3 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/40">
                <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <span className="text-7xl">📱</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Galaxy S25 Ultra</h3>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                    95%
                  </span>
                </div>

                <p className="mt-3 text-xl font-bold">Rp 16.999.000</p>

                <p className="mt-2 text-sm text-white/50">COD Available</p>
              </div>

              {/* Product 4 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400/40">
                <div className="mb-5 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                  <span className="text-7xl">💻</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">ROG Zephyrus G16</h3>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                    94%
                  </span>
                </div>

                <p className="mt-3 text-xl font-bold">Rp 24.750.000</p>

                <p className="mt-2 text-sm text-white/50">Escrow Protected</p>
              </div>
            </div>
          </div>
          {/* =========================
    ESCROW FLOW TIMELINE
========================== */}
          <div className="pb-32">
            <div className="mb-12 text-center">
              <p className="text-cyan-400">Secure Transaction Flow</p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                How Escrow Works
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                GadgetSwap simulates a safer transaction flow where buyer funds
                are held until the item is received and confirmed.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
                <p className="text-sm text-cyan-400">Step 01</p>
                <h3 className="mt-4 font-semibold">Buyer Pays</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Buyer chooses a gadget and starts payment through escrow.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
                <p className="text-sm text-cyan-400">Step 02</p>
                <h3 className="mt-4 font-semibold">Funds Held</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Money is temporarily held by the system, not sent to seller
                  yet.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
                <p className="text-sm text-cyan-400">Step 03</p>
                <h3 className="mt-4 font-semibold">Seller Ships</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Seller sends the gadget or confirms a verified COD meetup.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
                <p className="text-sm text-cyan-400">Step 04</p>
                <h3 className="mt-4 font-semibold">Buyer Confirms</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Buyer checks the gadget condition and confirms the item is
                  valid.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
                <p className="text-sm text-cyan-400">Step 05</p>
                <h3 className="mt-4 font-semibold">Funds Released</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Funds are released to the seller after buyer confirmation.
                </p>
              </div>
            </div>
          </div>
          {/* =========================
    COD PLANNER PREVIEW
========================== */}
          <div className="pb-32">
            <div className="mb-12 text-center">
              <p className="text-cyan-400">Verified COD Planner</p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Plan Safer Meetups
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                Find an ideal meeting point between buyer and seller with
                verified public locations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
              {/* Fake Map */}
              <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                {/* Route Line */}
                <div className="absolute top-1/2 left-[22%] h-1 w-[56%] -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-violet-400" />

                {/* Buyer */}
                <div className="absolute top-1/2 left-[18%] -translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl">
                    👤
                  </div>
                  <p className="mt-2 text-sm">Buyer</p>
                </div>

                {/* Meeting Point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg shadow-green-500/40">
                    📍
                  </div>

                  <div className="mt-3 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-center backdrop-blur-xl">
                    <p className="text-sm font-semibold">Mall Central Lobby</p>
                    <p className="text-xs text-white/50">
                      Verified Public Location
                    </p>
                  </div>
                </div>

                {/* Seller */}
                <div className="absolute top-1/2 right-[18%] -translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-xl">
                    🧑‍💻
                  </div>
                  <p className="mt-2 text-sm">Seller</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/50">Suggested Distance</p>
                  <h3 className="mt-2 text-2xl font-bold">2.4 km</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/50">Estimated Travel Time</p>
                  <h3 className="mt-2 text-2xl font-bold">12 Min</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/50">Safety Rating</p>
                  <h3 className="mt-2 text-2xl font-bold text-green-400">
                    9.8 / 10
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
