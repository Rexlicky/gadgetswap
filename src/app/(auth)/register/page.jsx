"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signUp } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  
  async function handleRegister(email, password) {
    const { error } = await signUp(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Registrasi berhasil! Silakan cek email untuk verifikasi.");

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Register
        </h1>

        <AuthForm
          title="Register"
          buttonText="Daftar"
          onSubmit={handleRegister}
        />
      </div>
    </main>
  );
}
