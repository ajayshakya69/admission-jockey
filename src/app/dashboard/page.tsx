"use client";

import type React from "react";
import { useState, useRef, useEffect, Suspense } from "react";
import Welcome from "./partials/welcome";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";
import Loader from "@/components/ui/loader";
import RightSidebar from "./partials/rightsidebar";
import LeftSidebar from "./partials/leftsidebar";
import { ChevronRight, ChevronUp } from "lucide-react";
import { useChatbotContext } from "../providers/chatbot/chatbot.context";
import { InputProvider } from "../providers/inputBarContext/chatbot.context";
import { PromptSuggestion } from "./partials/prompt.suggestion";

export default function ChatInterface() {
  const {
    messages,
    hasStartedChat,
    sessionId,
    showLeftSidebar,
    setShowLeftSidebar,
    showRightSidebar,
    setShowRightSidebar,
  } = useChatbotContext();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!sessionId) return <Loader />;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[310px_1fr_325px] h-[calc(100vh-74px)] overflow-y-hidden dark:bg-[#000000] bg-[#f6f6f6] relative">
      {/* Mobile Toggle Button for LeftSidebar */}
      {!showLeftSidebar && (
        <button
          onClick={() => setShowLeftSidebar(true)}
          className="lg:hidden fixed top-21 left-4 z-40  dark:text-white text-black  p-[4px] rounded-full  shadow"
        >
          <ChevronRight size={25} />
        </button>
      )}

      {/* Left Sidebar */}
      {showLeftSidebar && (
        <div className="lg:hidden fixed inset-0 z-20 dark:bg-black bg-white w-4/5 shadow-xl shadow-black/5 dark:shadow-white/5 overflow-y-auto">
          <LeftSidebar />
          <button
            onClick={() => setShowLeftSidebar(false)}
            className="fixed top-17 right-13 dark:text-white text-black p-1 "
          >
            ✕
          </button>
        </div>
      )}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      {showRightSidebar && (
        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 top-auto z-20 dark:bg-black bg-white w-full h-4/5 overflow-y-auto animate-slide-up ${showRightSidebar ? "animate-slide-up" : "animate-slide-down"} border-t-1 dark:border-white/10 border-black/10`}
        >
          <RightSidebar />
          <button
            onClick={() => setShowRightSidebar(false)}
            className="absolute top-4 right-4 font-semibold dark:text-white text-black p-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Center Content */}
      <main className="flex flex-col h-full relative overflow-y-scroll hide-scroll">
        {!hasStartedChat ? (
          <div className="flex-1 flex flex-col justify-center gap-5 md:min-h-fit overflow-y-auto hide-scroll md:w-3/4 w-full mx-auto my-auto md:px-4 px-1 lg:mt-10">
            <div className="lg:mt-0">
              <Welcome />
            </div>
            <InputProvider>
              <div className="p-4">
                <div className="w-full mx-auto">
                  <Suspense fallback={<div>Loading...</div>}>
                    <InputBar />
                  </Suspense>
                </div>
              </div>

              {/* Suggested Questions */}
              <PromptSuggestion />
            </InputProvider>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 lg:mt-10 text-white custom-scroll">
              <MessageComponent messagesEndRef={messagesEndRef} />
            </div>

            <div className="pt-4 lg:pb-10 lg:px-2 px-5">
              <Suspense fallback={<div>Loading...</div>}>
                <InputProvider>
                  <InputBar />
                </InputProvider>
              </Suspense>
            </div>
          </>
        )}

        {!hasStartedChat && (
            <div className="hidden lg:flex flex-col items-center gap-1 w-5xl text-[8px] absolute left-1/2 -translate-x-1/2 bottom-3 z-30">
            <div className="justify-center place-items-center gap-1 text-black dark:text-white cursor-pointer px-4 py-2 rounded-sm bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none text-center italic">
              Built on adaptive Al, Alumna.ai continuously learns from user
              conversations (with consent) to fine-tune responses and surface
              insights aligned with user preferences.
            </div>
            <span className="text-center tracking-wider dark:text-white/50 text-black/50 ">
              2025 Decacorn Edutech Private Limited all rights reserved
            </span>
            </div>
        )}
      </main>

      {/* Right Sidebar — Always visible on desktop, hidden on mobile */}
      <div className="lg:block hidden">
        <RightSidebar />
      </div>

      {/* Mobile: Show "Explore More" to open right sidebar */}
      {!hasStartedChat && (
        <div
          className="lg:hidden flex justify-center place-items-center text-[12px] gap-1 dark:text-white/50 text-black/50 cursor-pointer"
          onClick={() => setShowRightSidebar(true)}
        >
          Explore More <ChevronUp className="w-6 h-6 p-[2px]" />
        </div>
      )}
    </div>
  );
}
