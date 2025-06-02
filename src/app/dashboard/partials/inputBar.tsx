"use client";

import React, { useState, ReactNode } from "react";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message } from "../dashboard.type";


interface InputBarProps {
  placeholder?: string;
  showMicButton?: boolean;
  onSend?: (value: string) => void;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping?: React.Dispatch<React.SetStateAction<boolean>>;
  hasStartedChat?: boolean;
  setHasStartedChat?: React.Dispatch<React.SetStateAction<boolean>>;
  customButton?: ReactNode; // ✅ New custom button (e.g. emoji picker, image upload, etc.)
}



const InputBar: React.FC<InputBarProps> = ({
  placeholder = "What's your next discovery?",
  showMicButton = true,
  onSend,
  setMessages,
  customButton,
  setIsTyping,
  setHasStartedChat,
  hasStartedChat,
}) => {
  const [inputValue, setInputValue] = useState("");
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

    // Simulate bot response based on input
    setTimeout(() => {
      let botResponse: Message;

      if (
        inputValue.toLowerCase().includes("graphic era") ||
        inputValue.toLowerCase().includes("university")
      ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          content:
            "GEU Dehradun courses are offered to students at UG, PG, and certificate levels and are AICTE-approved. The university has been accredited by NAAC with an A+ grade and has ranked 74th by the NIRF 2023 in the Overall category.\n\nGraphic Era University, also known as GEU, is located in Dehradun, Uttarakhand, and was established in 1996. In 2008, the university attained its status as a Deemed university by the UGC, which is approved by the Ministry of Human Resource Development. It is one of the leading universities in Uttarakhand to offer quality education to students in the Engineering and Management fields.",
          sender: "bot",
          timestamp: new Date(),
          type: "card",
          cardData: {
            title: "Graphic Era University",
            description:
              "Leading university in Uttarakhand offering quality education",
            images: ["/placeholder.svg?height=200&width=300"],
            action: "Learn More",
          },
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          content:
            "I'm here to help you with information about universities, courses, admissions, and much more. What would you like to know?",
          sender: "bot",
          timestamp: new Date(),
        };
      }

      setMessages && setMessages((prev) => [...prev, botResponse]);
      setIsTyping && setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
