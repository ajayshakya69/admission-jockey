import React, { useEffect, useState } from "react";
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
  function TypingMessage({ content }: { content: string }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let index = 0;

      const interval = setInterval(() => {
        if (index < content.length - 1) {
          setDisplayedText((prev) => prev + content[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }, [content]);

    return (
      <div className="dark:bg-black bg-white poppins-faimly font-poppins inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base">
        <span className="whitespace-pre-wrap">{displayedText}</span>
        <span className="animate-pulse">|</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start md:px-4 px-1">
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
              <div className="rounded-full flex items-center justify-center h-10 w-12  p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                <Avatar className=" rounded-full w-full h-full dark:bg-black bg-white flex justify-center items-center">
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
              </div>
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
            {message.sender !== "user" ? (
              message.id === messages[messages.length - 1]?.id ? (
                <TypingMessage content={message.content} />
              ) : (
                <div className="dark:bg-black bg-white inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base font-poppins">
                  {message.content.split("\n").map((item, key) => (
                    <span key={key}>
                      {item}
                      <br />
                    </span>
                  ))}
                </div>
              )
            ) : (
              <div className=" font-poppins dark:bg-black bg-white inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base">
                {message.content.split("\n").map((item, key) => (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="flex gap-2 md:gap-3">
            <div className="rounded-full flex items-center justify-center h-10 w-12  p-[1px]  bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
              <Avatar className=" rounded-full w-full h-full dark:bg-black bg-white flex justify-center items-center">
                <AvatarFallback className="  dark:text-white text-black font-bold text-sm md:text-xl bg-transparent">
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
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 dark:text-white text-black px-4 py-2 rounded-lg shadow-md">
              <p className="animate-pulse text-sm font-medium">
                Thinking<span className="animate-dots">...</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll anchor */}
      <div ref={messagesEndRef} />
    </div>
  );
}
