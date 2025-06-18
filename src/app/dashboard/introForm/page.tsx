
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function IntroForm() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto flex flex-col gap-4 rounded-lg shadow-sm min-h-screen custom-scroll lg:p-0 p-5">
      <h1 className="lg:text-[24px] font-bold text-center">Quick intro about you?</h1>

      <div className="space-y-6 lg:text-base text-sm">
        <div className="space-y-2">
          <Label htmlFor="name">Hey there! What's your name?</Label>
          <Input id="name" placeholder="Name" className="" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="percentage">What is your academic percentage?</Label>
          <Input id="percentage" placeholder="Percentage" />
        </div>

        <div className="space-y-2">
          <Label>What stream are you interested in?</Label>
          <Input
            id="percentage"
            placeholder="Engineering, Arts, Commerce, etc."
          />
        </div>

        <div className="space-y-2">
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
      </div>
    </div>
  );
}
