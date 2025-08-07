"use client";

import { useChatbotContext } from "@/app/providers/chatbot/chatbot.context";

const NewChat = () => {
  const { refechChatBotSessionId, setHasStartedChat, setMessages } =
    useChatbotContext();
  const handleClick = () => {
    refechChatBotSessionId();
    setHasStartedChat(true);
    setMessages([]);
  };

  return (
    <button
      onClick={handleClick}
      className="lg:w-auto w-full bg-gradient-to-r font-semibold from-[#A07DF1] to-[#F69DBA] text-white px-3 py-1.5 rounded-sm lg:hover:shadow-lg transition-all duration-300 text-[10px]"
    >
      NewChat
    </button>
  );
};

export default NewChat;
