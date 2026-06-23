export default function CodPlanner() {
  return (
    <div className="pb-32">
      <div className="mb-12 text-center">
        <p className="text-cyan-400">Perencana COD Terverifikasi</p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Atur Titik Temu Lebih Aman
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Temukan lokasi pertemuan ideal antara pembeli dan penjual dengan
          rekomendasi tempat publik yang lebih aman.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
        {/* Map Simulasi */}
        <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10">
          {/* Pola Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Garis Rute */}
          <div className="absolute top-1/2 left-[22%] h-1 w-[56%] -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-violet-400" />

          {/* Pembeli */}
          <div className="absolute top-1/2 left-[18%] -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl">
              👤
            </div>
            <p className="mt-2 text-sm">Pembeli</p>
          </div>

          {/* Titik Temu */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg shadow-green-500/40">
              📍
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-center backdrop-blur-xl">
              <p className="text-sm font-semibold">Lobi Mall Central</p>
              <p className="text-xs text-white/50">
                Lokasi Publik Terekomendasi
              </p>
            </div>
          </div>

          {/* Penjual */}
          <div className="absolute top-1/2 right-[18%] -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-xl">
              🧑‍💻
            </div>
            <p className="mt-2 text-sm">Penjual</p>
          </div>
        </div>

        {/* Statistik COD */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/50">Jarak Rekomendasi</p>
            <h3 className="mt-2 text-2xl font-bold">2.4 km</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/50">Estimasi Perjalanan</p>
            <h3 className="mt-2 text-2xl font-bold">12 Menit</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/50">Rating Keamanan</p>
            <h3 className="mt-2 text-2xl font-bold text-green-400">9.8 / 10</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
