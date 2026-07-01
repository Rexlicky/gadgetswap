"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signIn } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  async function handleLogin(email, password) {
    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Selamat datang kembali! 👋");

    setTimeout(() => {
      router.push("/");
    }, 800);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Login
        </h1>

        <AuthForm title="Login" buttonText="Masuk" onSubmit={handleLogin} />
      </div>
    </main>
  );
}
