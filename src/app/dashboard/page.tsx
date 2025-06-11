"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Welcome from "./partials/welcome";
import { Message } from "./dashboard.type";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";
import Loader from "@/components/ui/loader";
import { useAxios } from "@/services/axios/axios.hook";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatbotSessionId, setChatbotSessionId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { axios } = useAxios();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function fetchSessionId() {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ML_URL}/init_session`,
      {
        name: "",
      },
    );

    setChatbotSessionId(res.data.session_id);
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetchSessionId();
  }, []);

  if (!chatbotSessionId) return <Loader />;

  if (!hasStartedChat) {
    return (
  <div className="flex flex-col items-center justify-center h-[650px] px-4 md:px-6 text-white bg-black">
    {/* Welcome Text */}
    <div className="w-full max-w-5xl text-center">
      <Welcome />
    </div>

    {/* Input Bar */}
    <div className="w-full max-w-3xl mt-10">
      <InputBar
        chatbotSessionId={chatbotSessionId}
        setMessages={setMessages}
        hasStartedChat={hasStartedChat}
        setHasStartedChat={setHasStartedChat}
        setIsTyping={setIsTyping}
      />
    </div>

    {/* Suggested Boxes */}
    <div className="w-full max-w-3xl mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="bg-[#11111146] text-zinc-300 p-4 rounded-lg shadow-md text-[10px] text-center hover:bg-[#1a1a1a] transition"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </div>
      ))}
    </div>
  </div>
);


  }

  return (
    <div className="flex flex-col h-[650px]">
      <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6 text-white custom-scroll">
        <div className="max-w-5xl mx-auto">
          <MessageComponent
            messages={messages}
            messagesEndRef={messagesEndRef}
            isTyping={isTyping}
          />
        </div>
      </main>

      <footer className="w-full py-2 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <InputBar
            chatbotSessionId={chatbotSessionId}
            setMessages={setMessages}
            hasStartedChat={hasStartedChat}
            setHasStartedChat={setHasStartedChat}
            setIsTyping={setIsTyping}
          />
        </div>
      </footer>
    </div>
  );
}
