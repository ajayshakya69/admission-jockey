"use client";

import { ThemeProvider } from "next-themes";
import { AxiosProvider } from "@/services/axios/axios.provider";
import { SupabaseProvider } from "@/services/supabase/supabase.provider";
import { QueryProvider } from "./query-provider";
import { ChatbotProvider } from "./chatbot/chatbot.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <AxiosProvider>
          <SupabaseProvider>
            <ChatbotProvider>{children}</ChatbotProvider>
          </SupabaseProvider>
        </AxiosProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
