"use client";
import { useContext } from "react";
import { ChatBotContext } from "./chatbot.context";

export function useChatbotId() {
  const context = useContext(ChatBotContext);
  if (!context) {
    throw new Error("NO context find");
  }

  return context;
}
