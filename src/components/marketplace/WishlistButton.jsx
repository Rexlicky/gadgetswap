"use client";

import { useState } from "react";

export default function WishlistButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setLiked(!liked);
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-black/40
        backdrop-blur-xl
        transition
        hover:border-cyan-400/30
      "
    >
      <span className="text-lg">{liked ? "❤️" : "🤍"}</span>
    </button>
  );
}
