"use client";

import { useState } from "react";
import Toast from "@/components/Toast";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistButton() {
  const [liked, setLiked] = useState(false);
  const { wishlistCount, setWishlistCount } = useWishlist();
  const [toast, setToast] = useState("");

  function handleWishlist(e) {
    e.preventDefault();

    const nextLiked = !liked;

    setLiked(nextLiked);

    if (nextLiked) {
      setWishlistCount((prev) => prev + 1);
      setToast("Ditambahkan ke wishlist");
    } else {
      setWishlistCount((prev) => Math.max(0, prev - 1));
      setToast("Dihapus dari wishlist");
    }

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  return (
    <>
      <button
        onClick={handleWishlist}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition hover:border-cyan-400/30"
      >
        <span className="text-lg">{liked ? "❤️" : "🤍"}</span>
      </button>

      <Toast message={toast} />
    </>
  );
}
