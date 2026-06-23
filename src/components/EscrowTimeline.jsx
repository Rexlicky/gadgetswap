export default function EscrowTimeline() {
  return (
    <div className="pb-32">
      <div className="mb-12 text-center">
        <p className="text-cyan-400">Alur Transaksi Aman</p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Cara Kerja Rekber
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          GadgetSwap mensimulasikan alur transaksi yang lebih aman, di mana dana
          pembeli ditahan sampai barang diterima dan dikonfirmasi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-cyan-400">Langkah 01</p>
          <h3 className="mt-4 font-semibold">Pembeli Membayar</h3>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Pembeli memilih gadget dan memulai pembayaran melalui sistem rekber.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-cyan-400">Langkah 02</p>
          <h3 className="mt-4 font-semibold">Dana Ditahan</h3>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Dana sementara ditahan oleh sistem dan belum diteruskan ke penjual.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-cyan-400">Langkah 03</p>
          <h3 className="mt-4 font-semibold">Penjual Mengirim</h3>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Penjual mengirim gadget atau mengonfirmasi pertemuan COD
            terverifikasi.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-cyan-400">Langkah 04</p>
          <h3 className="mt-4 font-semibold">Pembeli Konfirmasi</h3>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Pembeli mengecek kondisi gadget dan mengonfirmasi barang sesuai.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-cyan-400">Langkah 05</p>
          <h3 className="mt-4 font-semibold">Dana Dicairkan</h3>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Dana diteruskan ke penjual setelah pembeli memberi konfirmasi.
          </p>
        </div>
      </div>
    </div>
  );
}
