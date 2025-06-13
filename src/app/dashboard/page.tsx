"use client";

import type React from "react";
import { useState, useRef, useEffect, Suspense } from "react";
import Welcome from "./partials/welcome";
import { Message } from "./dashboard.type";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";
import Loader from "@/components/ui/loader";
import { useChatbotId } from "@/hooks/chatbot/chatbot.hook";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { sessionId } = useChatbotId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!sessionId) return <Loader />;

  if (!hasStartedChat) {
    return (
      <>
        {/* Welcome Text */}
        <div className="flex-1 flex flex-col justify-center gap-5 h-[90%] overflow-hidden md:w-3/4 w-[90%] mx-auto px-4 pb-32">
          <Welcome />
          <div className="p-4 md:p-6">
            <div className="w-full mx-auto">
              <Suspense fallback={<div>Loading...</div>}>
                <InputBar
                  setMessages={setMessages}
                  hasStartedChat={hasStartedChat}
                  setHasStartedChat={setHasStartedChat}
                  setIsTyping={setIsTyping}
                />
              </Suspense>
            </div>
          </div>
          <div className="w-full max-w-4xl mt-10 grid grid-cols-1 sm:grid-cols-3 mx-auto gap-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-[#11111146] text-zinc-300 p-4 rounded-lg shadow-md text-[13px] text-center hover:bg-[#1a1a1a] transition"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
            ))}
          </div>
        </div>
        {/* Input Section */}
        {/* Suggested Boxes */}
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col h-[90%] overflow-hidden w-[85%] mx-auto ">
        <div className="flex-1 overflow-y-auto px-4 text-white  bg-black custom-scroll">
          <div className="flex flex-col  justify-start min-h-[95%]">
            <MessageComponent
              messages={messages}
              messagesEndRef={messagesEndRef}
              isTyping={isTyping}
            />
          </div>
        </div>

        {/* Fixed bottom input */}
        <div className=" pb-0 shadow-md">
          <div className="w-full mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <InputBar
                setMessages={setMessages}
                hasStartedChat={hasStartedChat}
                setHasStartedChat={setHasStartedChat}
                setIsTyping={setIsTyping}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
