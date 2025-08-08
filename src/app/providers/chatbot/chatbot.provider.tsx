"use client";
import { ChatbotContext } from "./chatbot.context";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { useAxios } from "@/services/axios/axios.hook";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { CHATBOT_HISTORY_KEY } from "./chatbot.constants";
import { handleSumbitMessageType, Message } from "./chatbot.types";

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const { session } = useSupabase();
  const { axios } = useAxios();
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [hasStartedChat, setHasStartedChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const {
    data: sessionId,
    refetch: refechChatBotSessionId,
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

  function handlePreviousMessages(sessionId: string) {
    console.log("called", sessionId);
    const val = chatHistory.find((val) => {
      return val.sessionId == sessionId;
    });
    console.log(val);
    setMessages((pre) => [...val.messages]);
    setHasStartedChat(true);
  }

  const handleSendMessage = async ({
    onSubmit,
    inputValue,
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
        return [{ sessionId, messages: [message] }, ...prev].slice(0, 3);
      }
    });
  }

  useEffect(() => {
    const getHistory = localStorage.getItem(CHATBOT_HISTORY_KEY);
    if (getHistory) {
      try {
        setChatHistory(JSON.parse(getHistory));
      } catch (err) {
        console.error("Error parsing chat history from localStorage", err);
      }
    }
    refechChatBotSessionId();
  }, [session]);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem(CHATBOT_HISTORY_KEY, JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  return (
    <ChatbotContext.Provider
      value={{
        sessionId,
        isSessionIdLoading,
        refechChatBotSessionId,
        chatHistory,
        handleSendMessage,
        messages,
        setMessages,
        handlePreviousMessages,
        hasStartedChat,
        setHasStartedChat,
        isTyping,
        setIsTyping,
        showLeftSidebar,
        setShowLeftSidebar,
        showRightSidebar,
        setShowRightSidebar,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}
