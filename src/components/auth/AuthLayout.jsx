import AuthIllustration from "./AuthIllustration";
import AuthSwitcher from "./AuthSwitcher";

export default function AuthLayout({ children, mode, setMode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]" />

      <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl lg:grid-cols-2">
        <AuthIllustration />

        <div className="flex flex-col justify-center px-6 py-10 lg:px-14">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">
              {mode === "login" ? "Masuk ke GadgetSwap" : "Buat Akun Baru"}
            </h1>

            <p className="mt-3 text-white/50">
              {mode === "login"
                ? "Kelola wishlist, cart, dan transaksi gadget kamu."
                : "Daftar untuk mulai jual beli gadget dengan aman."}
            </p>
          </div>

          {children}

          <AuthSwitcher mode={mode} setMode={setMode} />
        </div>
      </section>
    </main>
  );
}
