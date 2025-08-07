import React, { useEffect, useState } from "react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Sparkle } from "lucide-react";
import { useChatbotContext } from "@/app/providers/chatbot/chatbot.context";
import { useSupabase } from "@/services/supabase/supabase.hook";

export default function MessageComponent({
  messagesEndRef,
}: {
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { isTyping, messages } = useChatbotContext();
  const { session } = useSupabase();
  const [userLetter, setUserLetter] = useState("U");

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

    useEffect(() => {
      if (!session) return;
      const letter =
        session.user && session.user.app_metadata.provider == "email"
          ? session.user?.user_metadata.display_name.slice(0, 1)
          : session.user?.user_metadata.name.slice(0, 1);

      setUserLetter(letter);
    }, [session]);

    function renderWithBold(text: string) {
      return text.split("\n").map((line, idx) => (
        <span key={idx}>
          {line
            .split(/(\*\*.*?\*\*)/g)
            .map((part, i) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={i}>{part.slice(2, -2)}</strong>
              ) : (
                part
              ),
            )}
          <br />
        </span>
      ));
    }

    return (
      <div className="dark:bg-black bg-white poppins-faimly font-poppins inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base">
        <span className="whitespace-pre-wrap">
          {renderWithBold(displayedText)}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start md:px-4 px-1">
      {messages.map((message: any) => (
        <div
          key={message.id}
          className={`flex py-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`flex ${message.sender === "user" ? "flex-row-reverse" : "flex-row"} gap-2 md:gap-5 max-w-[85%] md:max-w-[80%]`}
          >
            {/* Avatar */}
            {message.sender !== "user" ? (
              <div className="rounded-full flex items-center justify-center h-10 w-10 md:h-10 md:w-12 flex-shrink-0">
                <Avatar className="rounded-full w-full h-full flex justify-center items-center">
                  <AvatarFallback className="text-white font-bold text-sm md:text-xl bg-transparent">
                    <img
                      src="/minilogo.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                    />
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
                  {userLetter}
                </AvatarFallback>
              </Avatar>
            )}

            {/* Message bubble */}
            {message.sender !== "user" ? (
              message.id === messages[messages.length - 1]?.id ? (
                <TypingMessage content={message.content} />
              ) : (
                <div className="dark:bg-black bg-white inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base font-poppins">
                  {message.content.split("\n").map((item: any, key: any) => (
                    <span key={key}>
                      {item
                        .split(/(\*\*.*?\*\*)/g)
                        .map((part: any, index: any) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={index}>{part.slice(2, -2)}</strong>
                          ) : (
                            part
                          ),
                        )}
                      <br />
                    </span>
                  ))}
                </div>
              )
            ) : (
              <div className=" font-poppins dark:bg-black bg-white inline-block border border-white/20 dark:text-white text-black leading-relaxed p-3 md:p-4 rounded-lg shadow-md space-y-2 text-sm md:text-base">
                {message.content.split("\n").map((item: any, key: any) => (
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
            <div className="rounded-full flex items-center justify-center h-10 w-12">
              <Avatar className=" rounded-full w-full h-full flex justify-center items-center">
                <AvatarFallback className="text-white font-bold text-sm md:text-xl bg-transparent">
                  <img src="/minilogo.svg" alt="Logo" width={50} height={50} className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]" />
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
