export default function ConditionBreakdown() {
  const conditions = [
    {
      label: "Battery Health",
      value: "98%",
    },
    {
      label: "Layar",
      value: "Normal",
    },
    {
      label: "Body",
      value: "Mulus",
    },
    {
      label: "Kamera",
      value: "Normal",
    },
    {
      label: "Face ID / Fingerprint",
      value: "Berfungsi",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold">Detail Kondisi</h2>

      <div className="space-y-4">
        {conditions.map((condition) => (
          <div
            key={condition.label}
            className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
          >
            <span className="text-white/50">{condition.label}</span>

            <span className="font-medium text-cyan-300">{condition.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
