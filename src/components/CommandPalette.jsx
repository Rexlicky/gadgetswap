"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const commands = [
    { name: "Beranda", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Jual Gadget", path: "/sell" },
    { name: "Rekber", path: "/escrow" },
    { name: "Penjual", path: "/seller" },
    { name: "Pembeli", path: "/buyer" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCommands = commands.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/70 pt-32 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-black p-4">
        <input
          autoFocus
          type="text"
          placeholder="Cari halaman..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none"
        />

        <div className="mt-4">
          {filteredCommands.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                router.push(item.path);
                setOpen(false);
                setQuery("");
              }}
              className="flex w-full rounded-xl px-4 py-3 text-left transition hover:bg-white/5"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
