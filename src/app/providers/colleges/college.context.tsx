import React from "react";
import { CollegeContextType } from "./colleget.types";

export const CollegeContext = React.createContext<CollegeContextType | null>(
  null,
);

export function useCollegeContext() {
  const ctx = React.useContext(CollegeContext);

  if (!ctx)
    throw new Error("useCollegeContext must be inside the CollegeProvider ");

  return ctx;
}
