"use client"

import { useState } from "react"
import { Calendar } from "./calendar"
import { ImportantDates } from "./important-date"

import { useMobile } from "@/hooks/use-mobile"

export interface Event {
  id: string
  title: string
  time?: string
  description?: string
  date: Date
  lastDayToApply?: string
  type: "event" | "reminder"
}

export interface Reminder {
  id: string
  title: string
  time: string
  description?: string
  date: Date
}

export function CalendarView() {
  const [activeTab, setActiveTab] = useState<"calendar" | "important-dates">("calendar")
  const isMobile = useMobile()

  // Combined events and reminders data
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Jee Mains",
      date: new Date(2025, 3, 1), // April 1, 2025
      lastDayToApply: "16 April",
      type: "event",
    },
    {
      id: "2",
      title: "Jee Mains 2",
      date: new Date(2025, 3, 8), // April 8, 2025
      lastDayToApply: "16 April",
      type: "event",
    },
    {
      id: "3",
      title: "NID Results",
      date: new Date(2025, 3, 15), // April 15, 2025
      lastDayToApply: "20 April",
      type: "event",
    },
    {
      id: "4",
      title: "Study Session",
      time: "09:00",
      description: "Mathematics revision",
      date: new Date(2025, 3, 5), // April 5, 2025
      type: "reminder",
    },
    {
      id: "5",
      title: "Meeting",
      time: "14:30",
      description: "Project discussion",
      date: new Date(2025, 3, 5), // April 5, 2025
      type: "reminder",
    },
  ])

  const addEvent = (event: Omit<Event, "id">) => {
    const newEvent = {
      ...event,
      id: Date.now().toString(),
    }
    setEvents((prev) => [...prev, newEvent])
  }

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Main content */}
      <main className="flex-1">
        {isMobile ? (
          <div className="flex flex-col h-full">
            {/* Mobile view - show active tab */}
            {activeTab === "calendar" ? (
              <Calendar events={events} onAddEvent={addEvent} onDeleteEvent={deleteEvent} />
            ) : (
              <ImportantDates events={events} onDeleteEvent={deleteEvent} />
            )}

            {/* Mobile tab navigation */}
            <div className="mt-auto p-4 flex items-center justify-between">
              <button
                onClick={() => setActiveTab("calendar")}
                className={`flex-1 py-4 rounded-full text-center font-semibold ${
                  activeTab === "calendar" ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white" : "text-white"
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setActiveTab("important-dates")}
                className={`flex-1 py-4 rounded-full text-center font-semibold ${
                  activeTab === "important-dates"
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                    : "text-white"
                }`}
              >
                Important Dates
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 p-4">
            {/* Desktop view - show both */}
            <Calendar events={events} onAddEvent={addEvent} onDeleteEvent={deleteEvent} />
            <div className="w-full md:w-[400px] bg-gray-900 rounded-xl p-4">
              <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
              <ImportantDates events={events} onDeleteEvent={deleteEvent} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
