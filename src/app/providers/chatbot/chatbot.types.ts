export type chatbotContextType = {
  sessionId: string;
  isSessionIdLoading: boolean;
  refechSessionId: () => void;
  // isAuthorized: (requiredRoles?: string | string[]) => boolean;
};

export type handleSumbitMessageType = {
  inputValue: string;
  onSubmit: (message: string) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "card";
  cardData?: {
    title: string;
    description: string;
    images?: string[];
    action?: string;
  };
}
