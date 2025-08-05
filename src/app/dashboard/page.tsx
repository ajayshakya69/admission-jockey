// "use client";

// import type React from "react";
// import { useState, useRef, useEffect, Suspense } from "react";
// import Welcome from "./partials/welcome";
// import { Message } from "./dashboard.type";
// import InputBar from "./partials/inputBar";
// import MessageComponent from "./partials/messageComponent";
// import Loader from "@/components/ui/loader";
// import { useChatbotId } from "@/hooks/chatbot/chatbot.hook";
// // import { useSupabase } from "@/services/supabase/supabase.hook";
// // import { useRouter } from "next/navigation";

// export default function ChatInterface() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [hasStartedChat, setHasStartedChat] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const { sessionId } = useChatbotId();

//   //  const { session } = useSupabase();
//   //   const router = useRouter();
//   // const handleLandingSubmit = (message: string) => {
//   //   if (session) {
//   //     router.push(initMessage=${encodeURIComponent(message)});
//   //   } else {
//   //     router.push(
//   //       /auth?redirectTo=/dashboard&initMessage=${encodeURIComponent(message)},
//   //     );
//   //   }
//   // };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   if (!sessionId) return <Loader />;

//   if (!hasStartedChat) {
//     return (
//       <>
//         {/* Welcome Text */}
//         <div className="dark:bg-gradient-b  dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] min-h-[100vh] overflow-y-hidden hide-scroll">
//           <div className="flex-1 flex flex-col justify-center gap-5 md:min-h-fit overflow-y-scroll hide-scroll md:w-3/4 w-full mx-auto my-auto md:px-4 px-1 lg:mt-18">
//             <div className="lg:mt-0 mt-30">
//               <Welcome />
//             </div>
//             <div className="p-4 ">
//               <div className="w-full mx-auto">
//                 <Suspense fallback={<div>Loading...</div>}>
//                   <InputBar
//                     setMessages={setMessages}
//                     hasStartedChat={hasStartedChat}
//                     setHasStartedChat={setHasStartedChat}
//                     setIsTyping={setIsTyping}
//                   />
//                 </Suspense>
//               </div>
//             </div>
//             <div className="w-full max-w-4xl lg:grid  hidden grid-cols-1 sm:grid-cols-3 mx-auto gap-4 " >
//               {[
//                 "I scored 85% in 12th grade with PCM. Which engineering colleges can I get admission in?",
//                 "I’m interested in studying psychology in India. What are the top colleges I should consider?",
//                 "Based on my low NEET score (430), can you suggest any good private medical colleges with affordable fees?"
//               ].map((question, idx) => (
//                 <div
//                   key={idx}
//                   className="dark:bg-[#11111146] bg-white dark:text-white text-black p-4 rounded-lg shadow-[0_0_20px_6px_rgba(199,211,234,0.15)] dark:shadow-none text-[10px] text-center dark:hover:bg-[#1a1a1a] hover:bg-[#1a1a1a34] transition flex place-items-center cursor-pointer"
//                 // onClick={() => handleLandingSubmit(question)}
//                 >
//                   {question}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Input Section */}
//         {/* Suggested Boxes */}
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="flex flex-col min-h-fit overflow-hidden w-full mx-auto lg:px-15 dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe]">
//         <div className="flex-1 overflow-y-auto px-4 text-white custom-scroll">
//           <div className="flex flex-col  justify-start min-h-[90%]">
//             <MessageComponent
//               messages={messages}
//               messagesEndRef={messagesEndRef}
//               isTyping={isTyping}
//             />
//           </div>
//         </div>

//         {/* Fixed bottom input */}
//         <div className=" lg:pb-10 lg:px-0 px-5">
//           <div className="w-full mx-auto">
//             <Suspense fallback={<div>Loading...</div>}>
//               <InputBar
//                 setMessages={setMessages}
//                 hasStartedChat={hasStartedChat}
//                 setHasStartedChat={setHasStartedChat}
//                 setIsTyping={setIsTyping}
//               />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import type React from "react";
import { useState, useRef, useEffect, Suspense } from "react";
import Welcome from "./partials/welcome";
import { Message } from "./dashboard.type";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";
import Loader from "@/components/ui/loader";
import { useChatbotId } from "@/hooks/chatbot/chatbot.hook";
import RightSidebar from "./partials/rightsidebar";
import LeftSidebar from "./partials/leftsidebar";
import { ChevronRight, ChevronUp } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sessionId } = useChatbotId();
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // if (!sessionId) return <Loader />;

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

        <div className={`lg:hidden fixed inset-x-0 bottom-0 top-auto z-20 dark:bg-black bg-white w-full h-4/5 overflow-y-auto animate-slide-up ${showRightSidebar ? 'animate-slide-up' : 'animate-slide-down'} border-t-1 dark:border-white/10 border-black/10`}>

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

            <div className="p-4">
              <div className="w-full mx-auto">
                <Suspense fallback={<div>Loading...</div>}>
                  <InputBar
                    setMessages={setMessages}
                    hasStartedChat={hasStartedChat}
                    setHasStartedChat={setHasStartedChat}
                    setIsTyping={setIsTyping}
                  />
                </Suspense>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="w-full max-w-4xl lg:grid hidden grid-cols-1 sm:grid-cols-3 mx-auto gap-4">
              {[
                "I scored 85% in 12th grade with PCM. Which engineering colleges can I get admission in?",
                "I’m interested in studying psychology in India. What are the top colleges I should consider?",
                "Based on my low NEET score (430), can you suggest any good private medical colleges with affordable fees?",
              ].map((question, idx) => (
                <div
                  key={idx}
                  className="dark:bg-[#11111146] bg-white dark:text-white text-black p-4 rounded-lg shadow-[0_0_20px_6px_rgba(199,211,234,0.15)] dark:shadow-none text-[10px] text-center dark:hover:bg-[#1a1a1a] hover:bg-[#1a1a1a34] transition flex place-items-center cursor-pointer"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 lg:mt-10 text-white custom-scroll">
              <MessageComponent
                messages={messages}
                messagesEndRef={messagesEndRef}
                isTyping={isTyping}
              />
            </div>

            <div className="pt-4 lg:pb-10 lg:px-2 px-5">
              <Suspense fallback={<div>Loading...</div>}>
                <InputBar
                  setMessages={setMessages}
                  hasStartedChat={hasStartedChat}
                  setHasStartedChat={setHasStartedChat}
                  setIsTyping={setIsTyping}
                />
              </Suspense>
            </div>
          </>
        )}

        {!hasStartedChat && (
          <div className="lg:flex flex-col fixed bottom-3 gap-1 text-[10px] hidden">
            <div
              className=" justify-center place-items-center  gap-1 text-black dark:text-white cursor-pointer mx-5 px-4 py-2 rounded-sm bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.05)] dark:shadow-none text-center"
            >
              Buift on adaptive Al, Alumna.ai continuously learns from user conversations (with consent) to fine-tune responses and surface insights aligned with user preferences.
            </div>
            <span className="text-center tracking-wider dark:text-white/50 text-black/50 ">2025 Decacorn Edutech Private Limited all rights reserved</span>
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
