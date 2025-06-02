"use client"

import type React from "react"

import { useState } from "react"
import { X, Plus, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Event } from "./calendar-view"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDate: Date | null
  existingEvents: Event[]
  onAddEvent: (event: Omit<Event, "id">) => void
  onDeleteEvent: (id: string) => void
}

export function EventModal({
  isOpen,
  onClose,
  selectedDate,
  existingEvents,
  onAddEvent,
  onDeleteEvent,
}: EventModalProps) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [lastDayToApply, setLastDayToApply] = useState("")
  const [type, setType] = useState<"event" | "reminder">("reminder")
  const [isAddingNew, setIsAddingNew] = useState(false)

  if (!isOpen || !selectedDate) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onAddEvent({
      title: title.trim(),
      time: time.trim() || undefined,
      description: description.trim() || undefined,
      lastDayToApply: type === "event" ? lastDayToApply.trim() || undefined : undefined,
      date: selectedDate,
      type,
    })

    // Reset form
    setTitle("")
    setTime("")
    setDescription("")
    setLastDayToApply("")
    setIsAddingNew(false)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleClose = () => {
    setTitle("")
    setTime("")
    setDescription("")
    setLastDayToApply("")
    setIsAddingNew(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-xl font-bold">Important Dates</h2>
            <p className="text-gray-400 text-sm">{formatDate(selectedDate)}</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Existing Events */}
          {existingEvents.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Existing Events</h3>
              <div className="space-y-3">
                {existingEvents.map((event) => (
                  <div key={event.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{event.title}</h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              event.type === "event" ? "bg-purple-900 text-purple-300" : "bg-blue-900 text-blue-300"
                            }`}
                          >
                            {event.type === "event" ? "Event" : "Reminder"}
                          </span>
                        </div>

                        {event.time && (
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        )}

                        {event.lastDayToApply && (
                          <p className="text-red-400 text-sm mt-1">Last day to apply - {event.lastDayToApply}</p>
                        )}

                        {event.description && <p className="text-sm text-gray-300 mt-2">{event.description}</p>}
                      </div>
                      <button
                        onClick={() => onDeleteEvent(event.id)}
                        className="p-1 rounded-full hover:bg-gray-700 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add New Event */}
          {!isAddingNew ? (
            <Button
              onClick={() => setIsAddingNew(true)}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Event
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title *
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter event title"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type *</label>
                <RadioGroup
                  value={type}
                  onValueChange={(value) => setType(value as "event" | "reminder")}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="event" id="event" />
                    <Label htmlFor="event">Event</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reminder" id="reminder" />
                    <Label htmlFor="reminder">Reminder</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Time {type === "reminder" && "*"}
                </label>
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  required={type === "reminder"}
                />
              </div>

              {type === "event" && (
                <div>
                  <label htmlFor="lastDayToApply" className="block text-sm font-medium mb-2">
                    Last Day to Apply
                  </label>
                  <Input
                    id="lastDayToApply"
                    value={lastDayToApply}
                    onChange={(e) => setLastDayToApply(e.target.value)}
                    placeholder="e.g., 16 April"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              )}

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description (Optional)
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  className="bg-gray-800 border-gray-700 resize-none"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
                >
                  Add {type === "event" ? "Event" : "Reminder"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddingNew(false)}
                  className="border-gray-700 hover:bg-gray-800"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
