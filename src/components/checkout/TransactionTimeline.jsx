export default function TransactionTimeline() {
  const steps = [
    {
      title: "Pembayaran Diterima",
      completed: true,
    },
    {
      title: "Dana Ditahan Rekber",
      completed: false,
    },
    {
      title: "Penjual Mengirim Barang",
      completed: false,
    },
    {
      title: "Barang Diterima Pembeli",
      completed: false,
    },
    {
      title: "Dana Diteruskan ke Penjual",
      completed: false,
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="mb-6 text-2xl font-bold">Status Transaksi</h2>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                step.completed
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-white/40"
              }`}
            >
              {step.completed ? "✓" : index + 1}
            </div>

            <p className={step.completed ? "text-white" : "text-white/50"}>
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
