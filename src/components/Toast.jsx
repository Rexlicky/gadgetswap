"use client";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed right-6 bottom-6 z-[999] rounded-2xl border border-cyan-400/20 bg-black/80 px-5 py-4 text-sm text-white shadow-lg shadow-cyan-500/10 backdrop-blur-xl">
      {message}
    </div>
  );
}
