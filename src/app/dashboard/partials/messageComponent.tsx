import React from "react";
import { Message } from "../dashboard.type";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import AichatSvg from "./AichatSvg";
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
    <div className="flex-1  overflow-y-scroll h-[80%] px-4 md:px-16  py-20 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex justify-start py-2">
          <div className={`flex gap-2 md:gap-5 max-w-[85%] md:max-w-[80%]`}>
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
                className={`inline-block p-3 md:p-4 rounded-lg text-sm md:text-base leading-relaxed ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-800 text-white rounded-bl-sm"
                }`}
              >
                {message.content}
              </div>

              {message.type === "card" && message.cardData && (
                <Card className="bg-gray-800 border-gray-700 mt-2 max-w-sm md:max-w-md">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                      <img
                        src="/placeholder.svg?height=120&width=160"
                        alt="University"
                        className="w-full md:w-32 lg:w-40 h-24 md:h-20 lg:h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium mb-2 text-sm md:text-base">
                          {message.cardData.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">
                          {message.cardData.description}
                        </p>
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm"
                        >
                          {message.cardData.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
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
            <div className="bg-gray-800 text-white p-3 rounded-lg rounded-bl-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
