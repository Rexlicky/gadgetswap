export const metadata = {
  title: "Dashboard Admin",
};

export default function AdminPage() {
  const stats = [
    {
      title: "Total Pengguna",
      value: "2.450",
      icon: "👥",
    },
    {
      title: "Produk Aktif",
      value: "1.280",
      icon: "📦",
    },
    {
      title: "Transaksi",
      value: "845",
      icon: "💳",
    },
    {
      title: "Sengketa Rekber",
      value: "12",
      icon: "🛡️",
    },
  ];

  return (
    <main className="page-transition min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-cyan-400">Dashboard Admin</p>

        <h1 className="mt-3 text-5xl font-bold">Kelola Platform GadgetSwap</h1>

        <p className="mt-4 text-white/60">
          Pantau aktivitas pengguna, produk, transaksi, dan sistem Rekber dalam
          satu dashboard.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="text-4xl">{item.icon}</div>

              <h2 className="mt-4 text-3xl font-bold text-cyan-400">
                {item.value}
              </h2>

              <p className="mt-2 text-white/50">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
