export default function CategoryFilters() {
  const categories = ["Semua", "Smartphone", "Laptop", "Tablet", "Gaming"];

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`
            rounded-full border px-5 py-3 text-sm font-medium transition
            ${
              index === 0
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                : "border-white/10 bg-white/[0.04] text-white/70 hover:border-cyan-400/30 hover:bg-white/[0.08]"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
