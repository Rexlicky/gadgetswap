"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthForm({ mode, buttonText, onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isRegister = mode === "register";

  const passwordRules = [
    {
      label: "Minimal 8 karakter",
      valid: password.length >= 8,
    },
    {
      label: "Mengandung huruf besar",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Mengandung huruf kecil",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Mengandung angka",
      valid: /\d/.test(password),
    },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.valid);

  const isRegisterValid =
    fullName.trim() &&
    email.trim() &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    isPasswordValid &&
    agreed;

  async function submit(e) {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sama.");
      return;
    }

    if (isRegister && !agreed) {
      alert("Kamu harus menyetujui syarat dan kebijakan privasi.");
      return;
    }

    setLoading(true);

    try {
      await onSubmit({
        fullName,
        phone,
        email,
        password,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {isRegister && (
        <>
          <div>
            <label className="mb-2 block text-sm text-white/60">
              Nama Lengkap
            </label>

            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-violet-400/80 focus:bg-white/[0.09]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Nomor Telepon
            </label>

            <input
              type="tel"
              placeholder="Opsional"
              className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-violet-400/80 focus:bg-white/[0.09]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </>
      )}

      <div>
        <label className="mb-2 block text-sm text-white/60">Email</label>

        <input
          type="email"
          placeholder="Masukkan email kamu"
          className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-violet-400/80 focus:bg-white/[0.09]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
            required
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

      {isRegister && (
        <>
          <div>
            <label className="mb-2 block text-sm text-white/60">
              Konfirmasi Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ulangi password"
              className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-violet-400/80 focus:bg-white/[0.09]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-3 text-sm text-white/60">Syarat Password</p>

            <div className="space-y-2 text-xs">
              {passwordRules.map((rule) => (
                <p
                  key={rule.label}
                  className={`flex items-center gap-2 text-sm transition ${
                    rule.valid ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  <span className="text-base">{rule.valid ? "✓" : "!"}</span>

                  {rule.label}
                </p>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-3 text-xs leading-5 text-white/55">
            <input
              type="checkbox"
              className="mt-1 accent-violet-500"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />

            <span>
              Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi
              GadgetSwap.
            </span>
          </label>
        </>
      )}

      {!isRegister && (
        <div className="flex items-center justify-between text-xs text-white/55">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-violet-500" />
            Remember me
          </label>

          <button type="button" className="hover:text-violet-300">
            Forgot password?
          </button>
        </div>
      )}

      <button
        disabled={loading || (isRegister && !isRegisterValid)}
        className={`w-full rounded-full py-4 text-sm font-bold transition-all duration-300 ${
          loading || (isRegister && !isRegisterValid)
            ? "cursor-not-allowed bg-white/20 text-white/40"
            : "bg-white text-black hover:scale-[1.02]"
        }`}
      >
        {loading
          ? isRegister
            ? "Membuat akun..."
            : "Memproses..."
          : buttonText}
      </button>
    </form>
  );
}
