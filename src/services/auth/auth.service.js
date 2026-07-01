import { supabase } from "@/lib/supabase/client";

export async function signUp(email, password) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

export async function getCurrentSession() {
  return await supabase.auth.getSession();
}