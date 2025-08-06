"use client";

import React, { useState, ReactNode } from "react";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";
import { Send } from "lucide-react";
import { useChatbotContext } from "../providers/chatbot/chatbot.context";

interface InputBarProps {
  placeholder?: string;
  showMicButton?: boolean;
  onSend?: (value: string) => void;
  customButton?: ReactNode; // ✅ New custom button (e.g. emoji picker, image upload, etc.)
}

const InputBar: React.FC<InputBarProps> = ({
  placeholder = "What's your next discovery?",
  showMicButton = true,
  onSend,
  customButton,
}) => {
  const { inputValue, setInputValue } = useChatbotContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleUpload = () => {
    console.log("Upload button clicked");
  };

  const handleSend = () => {
    if (onSend) onSend(inputValue);

    setInputValue("");
  };
  console.log(inputValue);

  return (
    <div className="bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg h-14 px-5 my-4 flex items-center gap-3">
      <button onClick={handleUpload}>
        <GrAttachment size={20} color="#fff" />
      </button>

      {/* ✅ Optional custom button (emoji, image, etc.) */}
      {customButton && customButton}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="lg:text-lg text-sm outline-none"
        style={{ flex: 1, padding: "8px", borderRadius: "4px" }}
      />

      <button
        onClick={handleSend}
        className="rounded-full border-t border-[#ffffff3f] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] p-1"
      >
        {showMicButton ? (
          <MdOutlineMicNone size={28} color="#fff" />
        ) : (
          <Send size={28} color="#fff" />
        )}
      </button>
    </div>
  );
};

export default InputBar;
