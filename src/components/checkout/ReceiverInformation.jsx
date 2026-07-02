"use client";

export default function ReceiverInformation({ receiver, setReceiver }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="mb-5 text-2xl font-bold">👤 Informasi Penerima</h2>

      <div className="space-y-4">
        <input
          placeholder="Nama Lengkap"
          value={receiver.name}
          onChange={(e) =>
            setReceiver({
              ...receiver,
              name: e.target.value,
            })
          }
          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none"
        />

        <input
          placeholder="Nomor HP"
          value={receiver.phone}
          onChange={(e) =>
            setReceiver({
              ...receiver,
              phone: e.target.value,
            })
          }
          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none"
        />
      </div>
    </div>
  );
}
