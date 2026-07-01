import AuthSwitcher from "./AuthSwitcher";
import { FcGoogle } from "react-icons/fc";

export default function AuthLayout({ children, mode, setMode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
      {/* Dark Luxury Background */}
      <div className="absolute inset-0 -z-20 bg-[#020205]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:32px_32px]" />

      <section className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.06] px-8 py-10 shadow-[0_0_80px_rgba(124,58,237,0.25)] backdrop-blur-2xl md:px-14">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl">
            ✦
          </div>

          <h1 className="text-5xl font-light tracking-tight">
            {mode === "login" ? "Welcome to GadgetSwap" : "Create account"}
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/60">
            {mode === "login"
              ? "Masuk untuk mengelola wishlist, cart, dan transaksi GadgetSwap."
              : "Daftar untuk mulai jual beli gadget dengan aman."}
          </p>
        </div>

        {children}

        <div className="my-8 flex items-center gap-4 text-xs text-white/40">
          <div className="h-px flex-1 bg-white/15" />
          <span>atau</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <button
          className="
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-full
    border
    border-white/15
    bg-white/[0.06]
    py-4
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-white/[0.10]
  "
        >
          <FcGoogle size={22} />
          Masuk dengan Google
        </button>

        <AuthSwitcher mode={mode} setMode={setMode} />
      </section>
    </main>
  );
}
