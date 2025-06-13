"use client";
import React, { useState, ReactNode, useEffect, useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message } from "../dashboard.type";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useChatbotId } from "@/hooks/chatbot/chatbot.hook";

interface InputBarProps {
  placeholder?: string;
  showMicButton?: boolean;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping?: React.Dispatch<React.SetStateAction<boolean>>;
  hasStartedChat?: boolean;
  setHasStartedChat?: React.Dispatch<React.SetStateAction<boolean>>;
  customButton?: ReactNode;
  onSubmit?: (message: string) => void; // ✅ New custom button (e.g. emoji picker, image upload, etc.)
}

const InputBar: React.FC<InputBarProps> = ({
  placeholder = "What's your next discovery?",
  showMicButton = true,
  setMessages,
  customButton,
  setIsTyping,
  setHasStartedChat,
  hasStartedChat,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState("");
  const searchParams = useSearchParams();
  const initMessage = searchParams.get("initMessage");
  const hasHandledInit = useRef(false);

  const { sessionId } = useChatbotId();

  const router = useRouter();
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (onSubmit) {
      onSubmit(inputValue.trim());
      console.log("redirected");
      return; // 🚫 Don't continue normal behavior
    }

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
    console.log("sldkfsldfj");
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    console.log("init message in inut", initMessage);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("initMessage");
    router.replace(`?${newParams.toString()}`);

    if (initMessage && sessionId && !hasHandledInit.current) {
      setHasStartedChat && setHasStartedChat(true);
      hasHandledInit.current = true;
      const userMessage: Message = {
        id: Date.now().toString(),
        content: initMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages && setMessages([userMessage]);
      // Simulate sending
      setIsTyping && setIsTyping(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_ML_URL}/chat`, {
          session_id: sessionId,
          message: initMessage,
          history: ["string"],
        })
        .then((res) => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: res.data.response,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages && setMessages((prev) => [...prev, botMessage]);
        })
        .finally(() => {
          setIsTyping && setIsTyping(false);
        });
    }
  }, [sessionId]);

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
        className="lg:text-lg text-sm outline-none border-none"
        style={{ flex: 1, padding: "8px", borderRadius: "4px" }}
      />

      <Button
        onClick={handleSendMessage}
        disabled={!inputValue.trim() && !showMicButton}
        className="lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center border-t border-[#ffffff3f] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] hover:opacity-90 transition-opacity"
      >
        {inputValue.trim() ? (
          <Send size={26} color="#FFFFFF" />
        ) : (
          showMicButton && <MdOutlineMicNone size={26} color="#FFFFFF" />
        )}
      </Button>
    </div>
  );
};

export default InputBar;
