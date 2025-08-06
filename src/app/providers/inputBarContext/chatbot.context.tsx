// src/app/providers/chatbot/input.context.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

interface InputContextType {
  inputValue: string;
  setInputValue: (val: string) => void;
}

const InputContext = createContext<InputContextType | null>(null);

export const InputProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const ctx = useContext(InputContext);
  if (!ctx)
    throw new Error("useInputContext must be used inside InputProvider");
  return ctx;
};
