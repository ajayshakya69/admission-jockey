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
    <div className="flex-1  overflow-y-scroll h-[80%] px-4 md:px-16  py-20 space-y-4 hide-scroll">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex py-2 ${message.sender == "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`flex ${message.sender == "user" ? "flex-row-reverse" : "flex-row"} gap-2 md:gap-5 max-w-[85%] md:max-w-[80%]`}
          >
            {message.sender === "user" ? (
              <Avatar
                className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(232, 125, 179, 0.5) 0%, rgba(140, 103, 226, 0.5) 100%)",
                }}
              >
                <AvatarFallback className="text-white font-bold text-sm md:text-xl bg-transparent">
                  {message.sender === "user" ? "A" : "AI"}
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="rounded-full flex items-center justify-center h-10 w-24  p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                <Avatar className=" rounded-full w-full h-full bg-black flex justify-center items-center">
                  <AvatarFallback className="  text-white font-bold text-sm md:text-xl bg-transparent">
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
              </div>
            )}

            <div className={`space-y-2`}>
              <div
                className={`inline-block p-3 md:p-4 rounded-lg text-sm md:text-base  leading-relaxed ${
                  message.sender === "user"
                    ? "bg-gray-800 text-white rounded-br-sm"
                    : "bg-gray-900 text-white rounded-bl-sm"
                }`}
              >
                {message.content.split("\n").map((item, key) => {
                  return (
                    <span key={key}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="flex gap-2 md:gap-3">
            <div className="rounded-full flex items-center justify-center h-10 w-12  p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              <Avatar className=" rounded-full w-full h-full bg-black flex justify-center items-center">
                <AvatarFallback className="  text-white font-bold text-sm md:text-xl bg-transparent">
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
            </div>
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg shadow-md">
              <p className="animate-pulse text-sm font-medium">
                Thinking<span className="animate-dots">...</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
