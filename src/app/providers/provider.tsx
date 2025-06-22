'use client'

import { ThemeProvider } from 'next-themes'
import { AxiosProvider } from "@/services/axios/axios.provider"
import { SupabaseNewProvider } from "@/services/supabase/supabase.provider"
import { QueryProvider } from "./query-provider"
import { ChatbotSessionIdProvider } from "@/hooks/chatbot/chatbot-sessionid"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <AxiosProvider>
          <SupabaseNewProvider>
            <ChatbotSessionIdProvider>{children}</ChatbotSessionIdProvider>
          </SupabaseNewProvider>
        </AxiosProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
