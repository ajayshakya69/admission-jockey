"use client"

import type React from "react"

import { useState } from "react"
import { X, Plus, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Reminder } from "./calendar-view"

interface ReminderModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDate: Date | null
  existingReminders: Reminder[]
  onAddReminder: (reminder: Omit<Reminder, "id">) => void
  onDeleteReminder: (id: string) => void
}

export function ReminderModal({
  isOpen,
  onClose,
  selectedDate,
  existingReminders,
  onAddReminder,
  onDeleteReminder,
}: ReminderModalProps) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [isAddingNew, setIsAddingNew] = useState(false)

  if (!isOpen || !selectedDate) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !time.trim()) return

    onAddReminder({
      title: title.trim(),
      time: time.trim(),
      description: description.trim(),
      date: selectedDate,
    })

    // Reset form
    setTitle("")
    setTime("")
    setDescription("")
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
    setIsAddingNew(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-xl font-bold">Reminders</h2>
            <p className="text-gray-400 text-sm">{formatDate(selectedDate)}</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Existing Reminders */}
          {existingReminders.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Existing Reminders</h3>
              <div className="space-y-3">
                {existingReminders.map((reminder) => (
                  <div key={reminder.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{reminder.title}</h4>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{reminder.time}</span>
                        </div>
                        {reminder.description && <p className="text-sm text-gray-300 mt-2">{reminder.description}</p>}
                      </div>
                      <button
                        onClick={() => onDeleteReminder(reminder.id)}
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

          {/* Add New Reminder */}
          {!isAddingNew ? (
            <Button
              onClick={() => setIsAddingNew(true)}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Reminder
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
                  placeholder="Enter reminder title"
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Time *
                </label>
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description (Optional)
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter reminder description"
                  className="bg-gray-800 border-gray-700 resize-none"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
                >
                  Add Reminder
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
