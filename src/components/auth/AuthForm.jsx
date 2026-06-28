"use client";

import { useState } from "react";

export default function AuthForm({ title, buttonText, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm text-white/60">Email</label>

        <input
          type="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/60">Password</label>

        <input
          type="password"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400">
        {buttonText}
      </button>
    </form>
  );
}
