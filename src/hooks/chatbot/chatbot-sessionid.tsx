"use client";
import { ChatBotContext } from "./chatbot.context";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useAxios } from "@/services/axios/axios.hook";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function ChatbotSessionIdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSupabase();
  const { axios } = useAxios();

  const {
    data: sessionId,
    refetch: refechSessionId,
    isLoading: isSessionIdLoading,
  } = useQuery({
    queryKey: ["chatbot"],
    queryFn: async () => {
      if (!session) return Promise.resolve(null);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_ML_URL}/chat`, {
        message: " ",
      });
      return res.data.session_id ?? null;
    },
  });
  useEffect(() => {
    refechSessionId();
  }, [session]);
  return (
    <ChatBotContext.Provider
      value={{ sessionId, isSessionIdLoading, refechSessionId }}
    >
      {children}
    </ChatBotContext.Provider>
  );
}
