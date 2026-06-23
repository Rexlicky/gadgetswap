export default function GadgetMockup() {
  return (
    <div className="mt-12 flex justify-center pb-24">
      <div className="relative h-[520px] w-[340px] rounded-[2.4rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-2xl">
        <div className="h-full w-full rounded-[2.4rem] border border-white/10 bg-black/60 p-5">
          {/* Speaker HP */}
          <div className="mx-auto mb-6 h-6 w-24 rounded-full bg-white/10" />

          {/* Konten Mockup */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-white/[0.08] p-4">
              <p className="text-xs text-white/40">Gadget Pilihan</p>
              <h3 className="mt-2 text-lg font-semibold">iPhone 15 Pro</h3>
              <p className="mt-1 text-sm text-cyan-400">Skor Kondisi 96%</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.07] p-3">
                <p className="text-xs text-white/40">Baterai</p>
                <p className="mt-1 font-semibold">98%</p>
              </div>

              <div className="rounded-2xl bg-white/[0.07] p-3">
                <p className="text-xs text-white/40">Rekber</p>
                <p className="mt-1 font-semibold text-green-400">Aktif</p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-cyan-400/20 to-violet-500/20 p-4">
              <p className="text-xs text-white/50">Titik temu aman</p>
              <p className="mt-1 text-sm font-semibold">Lobi Mall Central</p>
            </div>
          </div>
        </div>

        {/* Badge Dana */}
        <div className="absolute top-16 -right-10 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl">
          <p className="text-xs text-white/50">Dana Ditahan</p>
          <p className="text-sm font-semibold text-cyan-300">Rp 14.999.000</p>
        </div>

        {/* Badge COD */}
        <div className="absolute bottom-20 -left-12 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl">
          <p className="text-xs text-white/50">COD Terverifikasi</p>
          <p className="text-sm font-semibold text-violet-300">2.4 km</p>
        </div>
      </div>
    </div>
  );
}
