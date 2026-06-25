export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="mb-8">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-4
          py-3
          text-sm
          outline-none
        "
      >
        <option value="default">Urutkan Produk</option>

        <option value="lowest-price">Harga Terendah</option>

        <option value="highest-price">Harga Tertinggi</option>

        <option value="highest-score">Skor Tertinggi</option>
      </select>
    </div>
  );
}
