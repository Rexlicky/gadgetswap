export default function OrderNote() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-4 text-xl font-semibold">📝 Catatan</h2>

      <textarea
        rows={4}
        placeholder="Catatan untuk penjual..."
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] p-4 outline-none resize-none"
      />
    </div>
  );
}
