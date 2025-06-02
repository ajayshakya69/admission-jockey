"use client";

import { Button } from "@/components/ui/button";
import { Trash2, Clock } from "lucide-react";
import type { Event } from "./calendar-view";
import { cn } from "@/lib/utils";

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
          className="p-4 rounded-xl border border-gray-800 flex items-center justify-between"
        >
          <div>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <div className="flex items-center gap-2 mt-1">
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
              <p className="text-gray-300 text-sm mt-2">{event.description}</p>
            )}
          </div>
          <div className="flex gap-2">
            {onDeleteEvent && (
              <button
                onClick={() => onDeleteEvent(event.id)}
                className="p-2 rounded-full hover:bg-gray-800"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            )}
            {event.type === "event" && (
              <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500">
                Apply
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
