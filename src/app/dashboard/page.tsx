"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Send, Mic, Paperclip, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Welcome from "./partials/welcome";
import { Message } from "./dashboard.type";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!hasStartedChat) {
    return (
      <>
        {/* Welcome Content */}

        <div className="flex-1 flex flex-col justify-center gap-30 h-screen md:w-3/4 w-full mx-auto px-4 pb-32">
          <Welcome />
          <div className="p-4 md:p-6">
            <div className="w-full mx-auto">
              <InputBar
                setMessages={setMessages}
                hasStartedChat={hasStartedChat}
                setHasStartedChat={setHasStartedChat}
              />
            </div>
          </div>
        </div>

        {/* Input Section */}
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto px-4 text-white  bg-black">
          <div className="flex flex-col items-center justify-start min-h-[90%]">
            <MessageComponent
              messages={messages}
              messagesEndRef={messagesEndRef}
            />
          </div>
        </div>

        {/* Fixed bottom input */}
        <div className=" pb-20 shadow-md">
          <div className="w-full mx-auto">
            <InputBar
              setMessages={setMessages}
              hasStartedChat={hasStartedChat}
              setHasStartedChat={setHasStartedChat}
            />
          </div>
        </div>
      </div>

      {/* Messages */}
      {/* <div className="flex flex-col min-h-screen bg-black text-white w-full md:w-3/4 mx-auto">
      
        <MessageComponent messages={messages} messagesEndRef={messagesEndRef} />
       
        <div className="border-t border-gray-800 p-4 bg-black sticky bottom-10 md:bottom-0">
          <div className="w-full mx-auto">
            <InputBar
              setMessages={setMessages}
              hasStartedChat={hasStartedChat}
              setHasStartedChat={setHasStartedChat}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
