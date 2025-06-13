"use client";

import type { ReactNode } from "react";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/ui/loader";

function AuthLayoutWrapper({ children }: { children: ReactNode }) {
  const { session, isLoading } = useSupabase();
  const router = useRouter();
  const urlparams = useSearchParams();
  const initMessage = urlparams.get("initMessage");

  let redirectPath = "/dashboard";
  if (initMessage) {
    redirectPath = "/dashboard?initMessage=" + encodeURIComponent(initMessage);
  }

  useEffect(() => {
    if (session) {
      router.push(redirectPath);
    }
  }, [session]);

  if (isLoading) return <Loader />;

  return <>{children}</>;
}

export default AuthLayoutWrapper;
