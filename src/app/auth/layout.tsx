"use client";
import type React from "react";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/ui/loader";

export default function LoginPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session, isLoading } = useSupabase();
  const router = useRouter();

  const urlparams = useSearchParams();
  const initMessage = urlparams.get("initMessage");

  let redirectPath = "/dashboard";
  if (initMessage) {
    redirectPath = "/dashboard?initMessage=" + initMessage;
  }

  useEffect(() => {
    if (session) {
      router.push(redirectPath);
    }
  }, [session]);
  if (isLoading) return <Loader />;
  return <>{children};</>;
}
