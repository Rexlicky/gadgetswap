import EscrowStatusCard from "@/components/escrow/EscrowStatusCard";
import EscrowTimeline from "@/components/escrow/EscrowTimeline";
import EscrowSummary from "@/components/escrow/EscrowSummary";
import EscrowActions from "@/components/escrow/EscrowActions";

export default function EscrowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-12">
          <p className="text-cyan-400">Dashboard Rekber</p>

          <h1 className="mt-3 text-5xl font-bold">Pantau Status Transaksi</h1>

          <p className="mt-4 text-white/60">
            Dana pembeli akan ditahan hingga barang diterima dan dikonfirmasi
            sesuai deskripsi.
          </p>
        </div>
        <EscrowStatusCard />
        <EscrowTimeline />
        <EscrowSummary />
        <EscrowActions />
      </div>
    </main>
  );
}
