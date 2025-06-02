"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { CalendarView } from "./partials/calendar-view";

export default function DarkCalendar() {

  return (
    <div className="min-h-screen bg-black text-white">
      <CalendarView />
    </div>
  );
}
