"use client";

import { useState } from "react";

export default function AuthForm({ buttonText, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <label>Email</label>

        <input
          type="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>

        <input
          type="password"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-black"
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </form>
  );
}
