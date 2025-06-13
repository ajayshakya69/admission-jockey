"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import { AlumniFormValues, alumniSchema } from "./register.schema";

export default function AlumniForm() {
  const form = useForm<AlumniFormValues>({
    resolver: zodResolver(alumniSchema),
    defaultValues: {
      name: "",
      graduationYear: "",
      course: "",
      review: "",
      image: null,
    },
  });

  const onSubmit = (data: AlumniFormValues) => {
    console.log("Form Submitted:", data);
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[635px] space-y-6"
        >
          <div className="text-center space-y-2">
            <h1 className="text-[32px] font-bold">Alumni Community</h1>
            <p className="text-[16px] text-gray-400">
              Join our alumni network to stay connected and inspire the next
              generation.
            </p>
          </div>

          <div className="flex gap-[32px] flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hey there! What’s your name?</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Graduation Year</FormLabel>
                    <FormControl>
                      <Input placeholder="2024, 2023, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course / Department</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Computer Science, MBBS, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your thoughts about college life</FormLabel>
                  <FormControl>
                    <Input placeholder="Write your review here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name="image"
              render={({ field: { onChange } }) => (
                <FormItem>
                  <FormLabel>Add your profile image</FormLabel>
                  <div className="flex justify-center place-items-center py-[24px] px-[32px] h-[181px] rounded-sm bg-[#ffffff0f] relative">
                    <Card className="bg-[#0a0a0a] border-dashed border-2 w-full h-full rounded-sm border-[#A07DF1]">
                      <CardContent className="p-6 text-center space-y-2 relative">
                        <UploadCloud className="mx-auto w-8 h-8 text-purple-300" />
                        <p className="text-sm text-gray-400">
                          Drop your file here, or{" "}
                          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] underline cursor-pointer">
                            click to browse
                          </span>
                        </p>
                        <Input
                          type="file"
                          className="opacity-0 absolute inset-0 cursor-pointer"
                          onChange={(e) => {
                            onChange(e.target.files?.[0] || null);
                          }}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-[#A07DF1] w-[141px] h-[44px]"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] w-[141px] h-[44px] text-white"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
