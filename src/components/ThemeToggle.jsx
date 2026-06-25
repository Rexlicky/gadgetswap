"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "purple" : "dark")}
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-4
        py-2
        text-sm
        backdrop-blur-xl
        transition
        hover:border-cyan-400/30
      "
    >
      {theme === "dark" ? "🌙 Dark" : "🟣 Purple"}
    </button>
  );
}
