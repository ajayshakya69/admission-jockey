"use client";
import { Suspense } from "react";
import AuthPage from "./partials/authPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading auth...</div>}>
      <AuthPage />
    </Suspense>
  );
}
