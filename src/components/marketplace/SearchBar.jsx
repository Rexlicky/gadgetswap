export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari iPhone, MacBook, Samsung..."
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 pr-12 outline-none backdrop-blur-xl focus:border-cyan-400"
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  );
}
