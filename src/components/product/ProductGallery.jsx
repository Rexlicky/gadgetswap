"use client";

import { useState } from "react";

export default function ProductGallery({ emoji }) {
  const [selected, setSelected] = useState(emoji);

  const images = [emoji, emoji, emoji, emoji];

  return (
    <div>
      <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
        <span className="text-9xl">{selected}</span>
      </div>

      <div className="mt-4 flex gap-3">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-cyan-400/30"
          >
            <span className="text-3xl">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
