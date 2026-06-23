export default function SearchBar() {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Cari iPhone, MacBook, Samsung..."
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none backdrop-blur-xl focus:border-cyan-400"
      />
    </div>
  );
}
