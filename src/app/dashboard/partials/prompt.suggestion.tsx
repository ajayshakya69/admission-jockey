import { useInputContext } from "@/app/providers/inputBarContext/chatbot.context";

export function PromptSuggestion() {
  const { setInputValue } = useInputContext();

  return (
    <div className="w-full max-w-4xl lg:grid hidden grid-cols-1 sm:grid-cols-3 mx-auto gap-4">
      {[
        "I scored 85% in 12th grade with PCM. Which engineering colleges can I get admission in?",
        "I’m interested in studying psychology in India. What are the top colleges I should consider?",
        "Based on my low NEET score (430), can you suggest any good private medical colleges with affordable fees?",
      ].map((question, idx) => (
        <div
          onClick={() => {
            console.log("sdjfhk");
            setInputValue(question);
          }}
          key={idx}
          className="dark:bg-[#11111146] bg-white dark:text-white text-black p-4 rounded-lg shadow-[0_0_20px_6px_rgba(199,211,234,0.15)] dark:shadow-none text-[10px] text-center dark:hover:bg-[#1a1a1a] hover:bg-[#1a1a1a34] transition flex place-items-center cursor-pointer"
        >
          {question}
        </div>
      ))}
    </div>
  );
}
