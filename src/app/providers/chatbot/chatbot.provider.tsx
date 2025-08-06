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
  const [chatHistory, setChatHistory] = useState<any>([]);

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
    localStorageHandler(sessionId, userMessage);
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

    localStorageHandler(sessionId, botResponse);
    setMessages && setMessages((prev) => [...prev, botResponse]);
    setIsTyping && setIsTyping(false);
  };

  function localStorageHandler(sessionId: string, message: Message) {
    setChatHistory((prev: any[]) => {
      const existingChatIndex = prev.findIndex(
        (val: any) => val.sessionId === sessionId,
      );

      if (existingChatIndex !== -1) {
        // 🛠 Update the existing session
        return prev.map((val: any, index: number) => {
          if (index === existingChatIndex) {
            return { ...val, messages: [...val.messages, message] };
          }
          return val;
        });
      } else {
        // ➕ Add a new session (and limit to latest 3 if needed)
        return [{ sessionId, messages: [message] }, ...prev].slice(0, 3);
      }
    });
  }
  useEffect(() => {
    refechSessionId();
  }, [session]);

  useEffect(() => {
    const chatHistorylocal = localStorage.getItem(CHATBOT_HISTORY_KEY);
    console.log(chatHistory);
  }, [chatHistory]);

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
