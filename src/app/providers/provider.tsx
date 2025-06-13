import { AxiosProvider } from "@/services/axios/axios.provider";
import { SupabaseNewProvider } from "@/services/supabase/supabase.provider";
import React from "react";
import { QueryProvider } from "./query-provider";
import { ChatbotSessionIdProvider } from "@/hooks/chatbot/chatbot-sessionid";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AxiosProvider>
        <SupabaseNewProvider>
          <ChatbotSessionIdProvider>{children}</ChatbotSessionIdProvider>
        </SupabaseNewProvider>
      </AxiosProvider>
    </QueryProvider>
  );
}
