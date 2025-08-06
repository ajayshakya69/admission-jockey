export type chatbotContextType = {
  sessionId: string;
  isSessionIdLoading: boolean;
  refechSessionId: () => void;
  // isAuthorized: (requiredRoles?: string | string[]) => boolean;
};

export type handleSumbitMessageType = {
  inputValue: string;
  onSubmit: (message: string) => void;
  hasStartedChat: boolean;
  setHasStartedChat: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping?: React.Dispatch<React.SetStateAction<boolean>>;
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
