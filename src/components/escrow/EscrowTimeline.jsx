export default function EscrowTimeline() {
  const steps = [
    {
      title: "Pembayaran Diterima",
      status: "Selesai",
      active: true,
    },
    {
      title: "Dana Ditahan Sistem",
      status: "Selesai",
      active: true,
    },
    {
      title: "Barang Dikirim",
      status: "Berjalan",
      active: true,
    },
    {
      title: "Pembeli Konfirmasi",
      status: "Menunggu",
      active: false,
    },
    {
      title: "Dana Dilepas",
      status: "Menunggu",
      active: false,
    },
  ];

  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <h2 className="text-2xl font-bold">Timeline Rekber</h2>

      <div className="mt-8 space-y-5">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                step.active
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                  : "border-white/10 bg-white/[0.04] text-white/40"
              }`}
            >
              {index + 1}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-white/50">{step.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
