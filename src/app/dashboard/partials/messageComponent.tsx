import React from "react";
import { Message } from "../dashboard.type";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Sparkle } from "lucide-react";
interface pageProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  isTyping: boolean;
}
export default function MessageComponent({
  messages,
  messagesEndRef,
  isTyping,
}: pageProps) {
  return (
    <div className="flex flex-col justify-start px-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex py-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2 md:gap-5 max-w-[85%] md:max-w-[80%]`}
          >
            {/* Avatar */}
            {message.sender !== "user" ? (
              <Avatar className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex justify-center items-center">
                <AvatarFallback className="text-white font-bold text-sm md:text-xl bg-transparent">
                  <svg width="30" height="30" viewBox="0 0 25 25" fill="none">
                    <defs>
                      <linearGradient
                        id="sparkleGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgba(232, 125, 179, 0.5)"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgba(140, 103, 226, 0.5)"
                        />
                      </linearGradient>
                    </defs>
                    <Sparkle stroke="url(#sparkleGradient)" />
                  </svg>
                </AvatarFallback>
              </Avatar>
            ) : (
              <Avatar
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(232, 125, 179, 0.5) 0%, rgba(140, 103, 226, 0.5) 100%)",
                }}
              >
                <AvatarFallback className="text-white font-bold text-sm md:text-xl bg-transparent">
                  A
                </AvatarFallback>
              </Avatar>
            )}

            {/* Message bubble */}
            <div className=" bg-black border border-white/20 text-white px-4 py-2 rounded-lg shadow-md space-y-2 text-[16px]">
              {message.content.split("\n").map((item, key) => {
                return <p key={key}>{item}</p>;
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Scroll anchor */}
      <div ref={messagesEndRef} />
    </div>
  );
}
