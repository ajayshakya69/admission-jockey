import { z } from "zod";

export const EventSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  time: z.string().optional(),
  description: z.string().optional(),
  date: z.coerce.date(),
  lastDayToApply: z.string().optional(),
  type: z.enum(["event", "reminder"]),
});

export type Event = z.infer<typeof EventSchema>;

export const reminderSchema = z.object({
  id: z.string().uuid(), // or z.string() if you're generating it elsewhere
  title: z.string().min(1, "Title is required"),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"), // "HH:MM" 24-hour format
  description: z.string().optional(),
  date: z.coerce.date(), // accepts strings or Date instances
});

export type Reminder = z.infer<typeof reminderSchema>;
