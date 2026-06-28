import SellForm from "@/components/sell/SellForm";

export default function SellPage() {
  return (
    <main className="page-transition min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-32">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-cyan-400">Jual Gadget</p>

          <h1 className="mt-3 text-5xl font-bold">Buat Listing Baru</h1>

          <p className="mt-4 text-white/60">
            Isi informasi gadget dan biarkan sistem menghitung skor kondisi
            secara otomatis.
          </p>
        </div>
        <SellForm />
      </div>
    </main>
  );
}
