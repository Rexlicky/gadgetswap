import SearchBar from "@/components/marketplace/SearchBar";
export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12">
          <p className="text-cyan-400">Marketplace Gadget</p>

          <h1 className="mt-3 text-5xl font-bold">Temukan Gadget Impianmu</h1>

          <p className="mt-4 text-white/60">
            Jelajahi ribuan gadget premium dengan perlindungan rekber dan skor
            kondisi transparan.
          </p>
        </div>
        <SearchBar />
      </div>
    </main>
  );
}
