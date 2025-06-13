import { Suspense, type ReactNode } from "react";
import AuthLayoutWrapper from "./partials/AuthLayoutWrapper";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
    </Suspense>
  );
}
