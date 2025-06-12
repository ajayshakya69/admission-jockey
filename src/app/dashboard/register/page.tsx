"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

export default function AlumniForm() {
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    course: "",
    review: "",
    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      graduationYear: "",
      course: "",
      review: "",
      image: null,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <form onSubmit={handleSubmit} className="w-full max-w-[635px] space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-[32px] font-bold">Alumni Community</h1>
          <p className="text-[16px] text-gray-400">
            Join our alumni network to stay connected and inspire the next
            generation.
          </p>
        </div>
        <div className="flex gap-[32px] flex-col">
          <div className="space-y-[3px]">
            <Label className="text-[16px]" htmlFor="name">
              Hey there! What’s your name?
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="space-y-[3px]">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Input
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="2024, 2023, etc."
              />
            </div>
            <div className="space-y-[3px]">
              <Label htmlFor="course">Course / Department</Label>
              <Input
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Computer Science, MBBS, etc."
              />
            </div>
          </div>

          <div className="space-y-[5px]">
            <Label htmlFor="review">Your thoughts about college life</Label>
            <Input
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Write your review here"
            />
          </div>

          <div className="space-y-[32px]">
            <Label>Add your profile image</Label>
            <div className="flex justify-center place-items-center py-[24px] px-[32px] h-[181px] rounded-sm bg-[#ffffff0f]">
              <Card className="bg-[#0a0a0a] border-dashed border-2 w-full h-full rounded-sm border-[#A07DF1]">
                <CardContent className="p-6 text-center space-y-2">
                  <UploadCloud className="mx-auto w-8 h-8 text-purple-300" />
                  <p className="text-sm text-gray-400">
                    Drop your file here, or{" "}
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] underline cursor-pointer">
                      click to browse
                    </span>
                  </p>
                  <Input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
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
    </div>
  );
}
