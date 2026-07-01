"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { signIn, signUp } from "@/services/auth/auth.service";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");

  async function handleSubmit({ fullName, phone, email, password }) {
    if (mode === "login") {
      const { error } = await signIn(email, password);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Selamat datang kembali! 👋");

      setTimeout(() => {
        router.push("/");
      }, 800);

      return;
    }

    const { error } = await signUp(email, password, {
      fullName,
      phone,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registrasi berhasil! Silakan login.");

    setTimeout(() => {
      setMode("login");
    }, 800);
  }

  return (
    <AuthLayout mode={mode} setMode={setMode}>
      <AuthForm
        mode={mode}
        buttonText={mode === "login" ? "Masuk" : "Buat Akun"}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}
