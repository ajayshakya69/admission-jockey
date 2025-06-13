"use client";
import React from "react";
import { chatbotContextType } from "./chatbot.types";

export const ChatBotContext = React.createContext<chatbotContextType | null>(
  null,
);
