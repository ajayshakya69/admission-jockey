"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message } from "../dashboard.type";
import axios from "axios";

interface InputBarProps {
  placeholder?: string;
  showMicButton?: boolean;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping?: React.Dispatch<React.SetStateAction<boolean>>;
  chatbotSessionId: string | null;
  hasStartedChat?: boolean;
  setHasStartedChat?: React.Dispatch<React.SetStateAction<boolean>>;
  customButton?: ReactNode; // ✅ New custom button (e.g. emoji picker, image upload, etc.)
}

const InputBar: React.FC<InputBarProps> = ({
  placeholder = "What's your next discovery?",
  showMicButton = true,
  setMessages,
  customButton,
  setIsTyping,
  setHasStartedChat,
  hasStartedChat,
  chatbotSessionId,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState("");
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (!hasStartedChat) {
      setHasStartedChat && setHasStartedChat(true);
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatbotSessionId != null) setSessionId(chatbotSessionId);
  }, [chatbotSessionId]);

  return (
    <div className="bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg h-14 px-5 my-4 flex items-center gap-3">
      <button>
        <GrAttachment size={20} color="#fff" />
      </button>

      {/* ✅ Optional custom button (emoji, image, etc.) */}
      {customButton && customButton}

      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder={placeholder}
        className="text-lg outline-none border-none"
        style={{ flex: 1, padding: "8px", borderRadius: "4px" }}
      />

      <Button
        onClick={handleSendMessage}
        disabled={!inputValue.trim()}
        className="rounded-full border-t border-[#ffffff3f] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] p-1"
      >
        {showMicButton ? (
          <MdOutlineMicNone size={28} color="#fff" />
        ) : (
          <Send size={28} color="#fff" />
        )}
      </Button>
    </div>
  );
};

export default InputBar;
