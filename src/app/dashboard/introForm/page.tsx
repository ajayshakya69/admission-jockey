"use client";

import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/services/supabase/supabase.hook";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1),
  academic_percentage: z.string().min(1),
  stream: z.string().min(1),
  entrance_exam: z.string().min(1),
  study_location: z.string().min(1),
  budget_per_year: z.string().min(1),
  learning_style: z.string().min(1),
});

type FormSchema = z.infer<typeof formSchema>;

export default function IntroForm() {
  const { session, supabase } = useSupabase();

  const [isPending, startTransition] = useTransition();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      academic_percentage: "",
      stream: "",
      entrance_exam: "",
      study_location: "",
      budget_per_year: "",
      learning_style: "",
    },
  });

  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const { data, error } = await supabase
        .from("application_builder")
        .select("*")
        .eq("user", userId)
        .single();

      if (data) {
        form.reset({
          name: data.name ?? "",
          academic_percentage: data.academic_percentage ?? "",
          stream: data.stream ?? "",
          entrance_exam: data.entrance_exam ?? "",
          study_location: data.study_location ?? "",
          budget_per_year: data.budget_per_year ?? "",
          learning_style: data.learning_style ?? "",
        });
      }
    };
    console.log("sdjfh");
    fetchData();
  }, [userId, supabase, form]);

  const onSubmit = async (values: FormSchema) => {
    if (!userId) return;
    startTransition(async () => {
      const { error } = await supabase.from("application_builder").upsert(
        {
          name: values.name,
          academic_percentage: values.academic_percentage,
          stream: values.stream,
          entrance_exam: values.entrance_exam,
          study_location: values.study_location,
          budget_per_year: values.budget_per_year,
          learning_style: values.learning_style,
          user: userId,
        },
        { onConflict: "user" },
      );

      if (error) {
        console.log(error);
        toast.error("Something went wrong!");
      } else {
        toast.success("Saved successfully!");
      }
    });
  };

  return (
    <div className="dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] max-h-screen overflow-y-scroll hide-scroll">
      <div className="space-y-6 max-w-2xl mx-auto flex flex-col gap-4 min-h-screen custom-scroll lg:p-0 p-5 ">
        <h1 className="lg:text-[30px] font-bold text-center">
          Quick intro about you?
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 lg:text-base text-sm"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hey there! What's your name?</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="academic_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your academic percentage?</FormLabel>
                  <FormControl>
                    <Input placeholder="Percentage" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What stream are you interested in?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Engineering, Arts, Commerce, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="entrance_exam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your target entrance exam?</FormLabel>
                  <FormControl>
                    <Input placeholder="JEE, CUET, NEET, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="study_location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your preferred study location?</FormLabel>
                  <FormControl>
                    <Input placeholder="Any city, state..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget_per_year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What's your budget per year for college?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Average amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="learning_style"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How would you describe your learning style?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Visual, Auditory, Practical"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center space-x-4 pt-4">
              {/* <Button
                type="button"
                className="rounded-[5px] flex items-center justify-center w-30 text-sm p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
              >
                <div className="rounded-[5px] h-full w-full dark:bg-white bg-[#F6F6F6] flex justify-center items-center">
                  View
                </div>
              </Button> */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-30 rounded-[5px] p-4 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
              >
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
