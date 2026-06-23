export default function EscrowSummary() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">Pembeli</p>
        <h3 className="mt-2 text-xl font-bold">Raka Pratama</h3>
        <p className="mt-2 text-sm text-cyan-300">Terverifikasi</p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">Penjual</p>
        <h3 className="mt-2 text-xl font-bold">Dimas Gadget</h3>
        <p className="mt-2 text-sm text-cyan-300">Trusted Seller</p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">Produk</p>
        <h3 className="mt-2 text-xl font-bold">iPhone 15 Pro</h3>
        <p className="mt-2 text-sm text-cyan-300">Skor 96%</p>
      </div>
    </div>
  );
}
