"use client";

import { Button } from "@/components/ui/button";
import { Trash2, Clock } from "lucide-react";
import type { Event } from "../calender.schema";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ImportantDatesProps {
  events: Event[];
  onDeleteEvent?: (id: string) => void;
}

export function ImportantDates({ events, onDeleteEvent }: ImportantDatesProps) {
  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <div className="space-y-4">
      {sortedEvents.map((event) => (
        <div
          key={event.id}
          className="p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold truncate">{event.title}</h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <p
                className={cn(
                  "text-sm",
                  event.type === "event" ? "text-red-400" : "text-blue-400"
                )}
              >
                {event.date.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                })}
              </p>
              {event.time && (
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
              )}
            </div>
            {event.lastDayToApply && (
              <p className="text-red-400 text-sm mt-1">
                Last day to apply - {event.lastDayToApply}
              </p>
            )}
            {event.description && (
              <p className="text-gray-300 text-sm mt-2 break-words">
                {event.description}
              </p>
            )}
          </div>

          <div className="flex-shrink-0 flex gap-2 items-start md:items-center">
            {onDeleteEvent && (
              <button
                onClick={() => onDeleteEvent(event.id ?? "")}
                className="p-2 rounded-full"
              >
                <Trash2 className="w-4 h-4 text-red-400 hover:text-red-200" />
              </button>
            )}
            {event.type === "event" ? (
              <Badge className="w-24 py-2 text-center text-white bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
                Event
              </Badge>
            ) : (
              <Badge className=" py-2 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] w-24 text-center text-white">
                Reminder
              </Badge>
            )}
          </div>
        </div>
      ))}
    </div>

  );
}
