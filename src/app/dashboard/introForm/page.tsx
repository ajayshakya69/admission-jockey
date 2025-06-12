<<<<<<< HEAD
"use client";

import { useState } from "react";
=======
// "use client"
// import * as React from "react"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// import {
//   Form,
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"

// type IntroFormValues = {
//   name: string
//   percentage: string
//   stream: string
//   exam: string
//   location: string
//   budget: string
//   learningStyle: string
// }

// const initialFormValues: IntroFormValues = {
//   name: "",
//   percentage: "",
//   stream: "",
//   exam: "",
//   location: "",
//   budget: "",
//   learningStyle: "",
// }

// const fields = [
//   { name: "name", label: "Hey there! What’s your name?", placeholder: "Name" },
//   { name: "percentage", label: "What is your academic percentage?", placeholder: "Percentage" },
//   { name: "stream", label: "What stream are you interested in?", placeholder: "Engineering, Arts, Commerce, etc." },
//   { name: "exam", label: "What’s your target entrance exam", placeholder: "JEE, CUET, NEET, etc." },
//   { name: "location", label: "What’s your preferred study location?", placeholder: "Any city, state..." },
//   { name: "budget", label: "What’s your budget per year for college?", placeholder: "Average amount" },
//   { name: "learningStyle", label: "How would you describe your learning style?", placeholder: "Visual, Auditory, Practical" },
// ] as const

>>>>>>> 7fbc1f35a03a72fed907b5202a8d79e20bb18b7b
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function IntroForm() {
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    stream: "",
    exam: "",
    location: "",
    budget: "",
    learningStyle: "",
  });

  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic required validation
    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) {
      showToast("Please fill all fields", "error");
      return;
    }

    showToast("Form submitted successfully!", "success");

    // Optional: reset form
    setFormData({
      name: "",
      percentage: "",
      stream: "",
      exam: "",
      location: "",
      budget: "",
      learningStyle: "",
    });
  };

  return (
<<<<<<< HEAD
    <div className="space-y-6 max-w-2xl mx-auto flex flex-col gap-4 rounded-lg shadow-sm relative">
      {/* Toast */}
      {toast.visible && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white shadow-lg text-sm z-50 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

=======
    <div className="space-y-6 max-w-2xl mx-auto flex flex-col gap-4 rounded-lg shadow-sm min-h-screen custom-scroll">
>>>>>>> 7fbc1f35a03a72fed907b5202a8d79e20bb18b7b
      <h1 className="text-3xl font-bold text-center">Quick intro about you?</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Hey there! What's your name?</Label>
          <Input
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="percentage">What is your academic percentage?</Label>
<<<<<<< HEAD
          <Input
            id="percentage"
            type="number"
            placeholder="Percentage"
            required
            value={formData.percentage}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stream">What stream are you interested in?</Label>
          <Input
            id="stream"
            placeholder="Engineering, Arts, Commerce, etc."
            required
            value={formData.stream}
            onChange={handleChange}
=======
          <Input id="percentage" placeholder="Percentage" />
        </div>

        <div className="space-y-2">
          <Label>What stream are you interested in?</Label>
          <Input
            id="percentage"
            placeholder="Engineering, Arts, Commerce, etc."
>>>>>>> 7fbc1f35a03a72fed907b5202a8d79e20bb18b7b
          />
        </div>

        <div className="space-y-2">
<<<<<<< HEAD
          <Label htmlFor="exam">What's your target entrance exam?</Label>
          <Input
            id="exam"
            placeholder="JEE, CUET, NEET, etc."
            required
            value={formData.exam}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">What's your preferred study location?</Label>
          <Input
            id="location"
            placeholder="Any city, state..."
            required
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">What's your budget per year for college?</Label>
          <Input
            id="budget"
            type="number"
            placeholder="Average amount"
            required
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="learningStyle">How would you describe your learning style?</Label>
          <Input
            id="learningStyle"
            placeholder="Visual, Auditory, Practical"
            required
            value={formData.learningStyle}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <button
            type="button"
            className="rounded-[5px] flex items-center justify-center w-30 text-sm p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
          >
            <div className="rounded-[5px] h-full w-full bg-black flex justify-center items-center px-4 py-2 text-white">
=======
          <Label>What's your target entrance exam?</Label>
          <Input id="percentage" placeholder="JEE, CUET, NEET, etc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">
            What's your preferred study location?
          </Label>
          <Input id="location" placeholder="Any city, state..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">
            What's your budget per year for college?
          </Label>
          <Input id="budget" placeholder="Average amount" />
        </div>

        <div className="space-y-2">
          <Label>How would you describe your learning style?</Label>
          <Input id="percentage" placeholder="Visual, Auditory, Practical" />
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <button className="rounded-[5px] flex items-center justify-center w-30 text-sm p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            <div className="rounded-[5px] h-full w-full bg-black flex justify-center items-center">
>>>>>>> 7fbc1f35a03a72fed907b5202a8d79e20bb18b7b
              View
            </div>
          </button>
          <Button
            type="submit"
            className="w-30 rounded-[5px] p-4 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]"
          >
            Submit
          </Button>
        </div>
<<<<<<< HEAD
      </form>
=======
      </div>
>>>>>>> 7fbc1f35a03a72fed907b5202a8d79e20bb18b7b
    </div>
  );
}
