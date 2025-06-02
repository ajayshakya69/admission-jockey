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
