"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthForm({ buttonText, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(email, password);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-white/60">Email</label>

        <input
          type="email"
          placeholder="Masukkan email kamu"
          className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-violet-400/80 focus:bg-white/[0.09]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/60">Password</label>

        <div className="flex items-center rounded-full border border-white/15 bg-white/[0.06] px-5 backdrop-blur-xl transition focus-within:border-violet-400/80 focus-within:bg-white/[0.09]">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/35"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-3 text-white/45 transition hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-white/55">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-violet-500" />
          Remember me
        </label>

        <button type="button" className="hover:text-violet-300">
          Forgot password?
        </button>
      </div>

      <button
        disabled={loading}
        className="w-full rounded-full bg-white py-4 text-sm font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Memproses..." : buttonText}
      </button>
    </form>
  );
}
