import { z } from "zod";

export const alumniSchema = z.object({
  name: z.string().min(1, "Name is required"),
  graduationYear: z.string().min(4, "Enter a valid year"),
  course: z.string().min(1, "Course is required"),
  review: z.string().min(1, "Review is required"),
  image: z
    .any()
    .refine((file) => file instanceof File || file === null, {
      message: "Must be a file",
    })
    .optional(),
});

export type AlumniFormValues = z.infer<typeof alumniSchema>;
