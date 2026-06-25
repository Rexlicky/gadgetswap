export default function ProductRatingSummary() {
  return (
    <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-white/50">Rating Produk</p>

          <h2 className="mt-2 text-5xl font-bold">
            4.8
            <span className="text-2xl text-white/50">/5</span>
          </h2>

          <p className="mt-2 text-white/50">Berdasarkan 127 Review</p>
        </div>

        <div className="text-4xl text-yellow-400">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
}
