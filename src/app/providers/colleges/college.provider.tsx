"use client ";

import { ReactNode } from "react";
import { CollegeContext } from "./college.context";
import { useAxios } from "@/services/axios/axios.hook";
import { useQuery } from "@tanstack/react-query";
import { PropertyApiResponse } from "./colleget.types";

export function CollegeProvider({ children }: { children: ReactNode }) {
  const { axios } = useAxios();

  const {
    data: colleges,
    isLoading,
    refetch: refectColleges,
  } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const data = await axios.get<PropertyApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/property`,
      );
      console.log(data);
      return data.data;
    },
  });
  console.log({ colleges });
  return (
    <CollegeContext.Provider
      value={{ colleges: colleges ?? [], isLoading, refectColleges }}
    >
      {children}
    </CollegeContext.Provider>
  );
}
