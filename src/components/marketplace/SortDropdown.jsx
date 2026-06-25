export default function SortDropdown({ sortBy, setSortBy }) {
  const sortOptions = [
    { label: "Urutkan Produk", value: "default" },
    { label: "Harga Terendah", value: "lowest-price" },
    { label: "Harga Tertinggi", value: "highest-price" },
    { label: "Skor Tertinggi", value: "highest-score" },
  ];

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {sortOptions.map((option) => {
        const isActive = sortBy === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setSortBy(option.value)}
            className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
              isActive
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                : "border-white/10 bg-white/[0.04] text-white/70 hover:border-cyan-400/30 hover:bg-white/[0.08]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
