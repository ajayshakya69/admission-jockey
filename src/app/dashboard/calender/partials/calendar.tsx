"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { EventModal } from "./event-modal"
import type { Event } from "./calendar-view"

interface CalendarProps {
  events: Event[]
  onAddEvent: (event: Omit<Event, "id">) => void
  onDeleteEvent: (id: string) => void
}

export function Calendar({ events, onAddEvent, onDeleteEvent }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)) // April 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const isMobile = useMobile()

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]

  // Get the first day of the month (0-6, where 0 is Sunday)
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  // Get the number of days in the month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  // Create an array of days for the current month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Add empty cells for days before the first day of the month
  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, i) => null)

  // Combine empty cells and days
  const allCells = [...emptyCells, ...days]

  // Format month and year
  const monthYear = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  // Get events for a specific date
  const getEventsForDate = (day: number) => {
    return events.filter(
      (event) =>
        event.date.getDate() === day &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear(),
    )
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // Handle date click
  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(clickedDate)
    setIsEventModalOpen(true)
  }

  return (
    <>
      <div className="bg-gray-900 rounded-xl p-4 md:p-6">
        {/* Calendar header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-800">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold">{monthYear}</h2>
          <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={cn(
                "text-center font-medium py-2",
                index === 0 && "text-red-400", // Sunday in red
              )}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {allCells.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />
            }

            const isToday =
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()

            const dayEvents = getEventsForDate(day)
            const hasEvents = dayEvents.length > 0

            return (
              <div
                key={`day-${day}`}
                onClick={() => handleDateClick(day)}
                className={cn(
                  "aspect-square flex flex-col p-1 relative rounded-md border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors",
                  hasEvents && "border-purple-500",
                  isToday && "bg-gray-800",
                )}
              >
                <span
                  className={cn(
                    "text-sm md:text-base",
                    index % 7 === 0 && "text-red-400", // Sunday in red
                    hasEvents && "font-medium",
                  )}
                >
                  {day}
                </span>

                {/* Event titles */}
                <div className="mt-1 overflow-hidden flex-1">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={event.id}
                      className={cn(
                        "text-[8px] md:text-xs truncate px-1 rounded mb-0.5",
                        event.type === "event" ? "text-purple-400" : "text-blue-400",
                      )}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-[8px] md:text-xs text-gray-400 px-1">+{dayEvents.length - 2} more</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Event list (visible on mobile) */}
        {isMobile && (
          <div className="mt-8 border-t border-gray-800 pt-4">
            {events
              .filter(
                (event) =>
                  event.date.getMonth() === currentDate.getMonth() &&
                  event.date.getFullYear() === currentDate.getFullYear(),
              )
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((event) => (
                <div key={event.id} className="flex items-center gap-2 mb-4">
                  <div className="text-gray-400">
                    {event.date.getDate()} {currentDate.toLocaleDateString("en-US", { month: "long" })}
                  </div>
                  <div
                    className={cn("w-1 h-4 rounded-full", event.type === "event" ? "bg-purple-400" : "bg-blue-400")}
                  ></div>
                  <div className={cn(event.type === "event" ? "text-purple-400" : "text-blue-400")}>{event.title}</div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        selectedDate={selectedDate}
        existingEvents={selectedDate ? getEventsForDate(selectedDate.getDate()) : []}
        onAddEvent={onAddEvent}
        onDeleteEvent={onDeleteEvent}
      />
    </>
  )
}
