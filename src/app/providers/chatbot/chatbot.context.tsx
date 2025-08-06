import React from "react";

export const ChatbotContext = React.createContext<any>(null);

export function useChatbotContext() {
  return React.useContext(ChatbotContext);
}
