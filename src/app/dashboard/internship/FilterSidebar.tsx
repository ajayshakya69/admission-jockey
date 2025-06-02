"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterSidebar() {
  return (
    <div className="w-full sm:w-64 p-6 bg-zinc-900 rounded-xl text-white space-y-6">
      <h2 className="text-lg font-semibold">Apply Filters</h2>

      <div>
        <Label className="text-zinc-400 mb-2 block">Job Type</Label>
        <RadioGroup defaultValue="internship" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="internship" id="internship" />
            <Label htmlFor="internship">Internship</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fulltime" id="fulltime" />
            <Label htmlFor="fulltime">Full-time</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label className="text-zinc-400 mb-2 block">Experience Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-zinc-400 mb-2 block">Stipend Range</Label>
        <Slider defaultValue={[5]} max={10} step={1} />
      </div>

      <div>
        <Label className="text-zinc-400 mb-2 block">Max Duration</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 month</SelectItem>
            <SelectItem value="3">3 months</SelectItem>
            <SelectItem value="6">6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between pt-4">
        <button className="text-pink-400 underline text-sm">Clear</button>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Apply</Button>
      </div>
    </div>
  )
}
