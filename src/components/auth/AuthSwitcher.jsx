export default function AuthSwitcher({ mode, setMode }) {
  return (
    <p className="mt-8 text-center text-sm text-white/50">
      {mode === "login" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
      <button
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        className="font-semibold text-cyan-400 hover:text-cyan-300"
      >
        {mode === "login" ? "Daftar" : "Masuk"}
      </button>
    </p>
  );
}
