export type chatbotContextType = {
  sessionId: string;
  isSessionIdLoading: boolean;
  refechSessionId: () => void;
  // isAuthorized: (requiredRoles?: string | string[]) => boolean;
};
