"use client";

import { useState } from "react";
import { X, Plus, Trash2, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Event } from "../calender.schema";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  existingEvents: Event[];
  onAddEvent: (event: Omit<Event, "id">) => void;
  onDeleteEvent: (id: string) => void;
}

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  time: z.string().optional(),
  description: z.string().optional(),
  lastDayToApply: z.string().optional(),
  type: z.enum(["event", "reminder"]),
});

export function EventModal({
  isOpen,
  onClose,
  selectedDate,
  existingEvents,
  onAddEvent,
  onDeleteEvent,
}: EventModalProps) {
  const [isAddingNew, setIsAddingNew] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      time: "",
      description: "",
      lastDayToApply: "",
      type: "reminder",
    },
  });

  const type = form.watch("type");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!selectedDate) return;

    onAddEvent({
      ...values,
      lastDayToApply:
        values.type === "event" ? values.lastDayToApply : undefined,
      time: values.time || undefined,
      description: values.description || undefined,
      date: selectedDate,
    });

    form.reset();
    setIsAddingNew(false);
  };

  const handleClose = () => {
    form.reset();
    setIsAddingNew(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md dark:bg-black bg-white dark:text-white text-black border dark:border-[#ffffff23]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <div>
              Important Dates
              <DialogDescription className="dark:text-white/50 text-black/50 text-sm mt-3">
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </DialogDescription>
            </div>
            {/* <Button size="icon" variant="ghost" onClick={handleClose}>
              <X className="w-4 h-4" />
            </Button> */}
          </DialogTitle>
        </DialogHeader>

        {existingEvents.length > 0 && (
          <div className="space-y-3 mb-6">
            {existingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{event.title}</h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full text-white ${event.type === "event"
                            ? "bg-purple-900"
                            : "bg-blue-900"
                          }`}
                      >
                        {event.type === "event" ? "Event" : "Reminder"}
                      </span>
                    </div>

                    {event.time && (
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.lastDayToApply && (
                      <p className="text-red-400 text-sm mt-1">
                        Last day to apply - {event.lastDayToApply}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-sm text-gray-300 mt-2">
                        {event.description}
                      </p>
                    )}
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onDeleteEvent(event.id ?? "")}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isAddingNew ? (
          <Button
            onClick={() => setIsAddingNew(true)}
            className="w-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Event
          </Button>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm"
                        placeholder="Enter event title"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex gap-4"
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        {["event", "reminder"].map((val) => (
                          <div
                            key={val}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={val}
                              id={val}
                              className="data-[state=checked]:bg-white"
                            />
                            <Label htmlFor={val} className="capitalize">
                              {val}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time {type === "reminder" && "*"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="time"
                        required={type === "reminder"}
                        className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {type === "event" && (
                <FormField
                  control={form.control}
                  name="lastDayToApply"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Day to Apply</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., 16 April"
                          className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter description"
                        className="bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-[#ffffff0d] border-t dark:border-[#ffffff14] dark:to-[#ffffff04] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none rounded-sm resize-none"
                        rows={3}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
                >
                  Add {type === "event" ? "Event" : "Reminder"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
