export default function FeatureCards() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
        <p className="text-sm text-cyan-400">01</p>
        <h3 className="mt-4 text-xl font-semibold">Perlindungan Rekber</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">
          Dana pembeli akan ditahan oleh sistem sampai gadget diterima dan
          dikonfirmasi sesuai deskripsi.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
        <p className="text-sm text-violet-400">02</p>
        <h3 className="mt-4 text-xl font-semibold">COD Terverifikasi</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">
          Rencanakan titik temu yang lebih aman melalui rekomendasi lokasi
          publik yang terverifikasi.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-2xl">
        <p className="text-sm text-blue-400">03</p>
        <h3 className="mt-4 text-xl font-semibold">Skor Kondisi</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">
          Kondisi gadget dihitung dari kesehatan baterai, layar, bodi, dan
          fungsi hardware utama.
        </p>
      </div>
    </div>
  );
}
