"use client";
import { ChatbotContext } from "./chatbot.context";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useAxios } from "@/services/axios/axios.hook";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CHATBOT_HISTORY_KEY } from "./chatbot.constants";
import { handleSumbitMessageType } from "./chatbot.types";
import { Message } from "@/app/dashboard/dashboard.type";

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const { session } = useSupabase();
  const { axios } = useAxios();
  const [chatHistory, setChatHistory] = useState([]);

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

  const handleSendMessage = async ({
    inputValue,
    onSubmit,
    hasStartedChat,
    setHasStartedChat,
    setMessages,
    setIsTyping,
    setInputValue,
  }: handleSumbitMessageType) => {
    if (!inputValue.trim()) return;

    if (onSubmit) {
      onSubmit(inputValue.trim());

      return; // 🚫 Don't continue normal behavior
    }

    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    if (setMessages) {
      setMessages((prev) => [...prev, userMessage]);
    }
    if (setIsTyping) {
      setIsTyping(true);
    }
    setInputValue("");

    const resMessage = await axios.post(
      `${process.env.NEXT_PUBLIC_ML_URL}/chat`,
      {
        session_id: sessionId,
        message: inputValue,
        history: ["string"],
      },
    );

    let botResponse: Message;

    botResponse = {
      id: (Date.now() + 1).toString(),
      content: resMessage.data.response,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages && setMessages((prev) => [...prev, botResponse]);
    setIsTyping && setIsTyping(false);
  };

  useEffect(() => {
    refechSessionId();
  }, [session]);

  // useEffect(()=>{
  //   const chatHistory = localStorage.getItem(CHATBOT_HISTORY_KEY)
  // },[])

  return (
    <ChatbotContext.Provider
      value={{
        sessionId,
        isSessionIdLoading,
        refechSessionId,
        chatHistory,
        handleSendMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}
