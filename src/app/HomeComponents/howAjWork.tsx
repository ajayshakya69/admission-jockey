import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const steps = [
    {
        step: "Step 1",
        title: "Ask Anything",
        description:
            "From “which college fits my rank?” to “what job suits my interests?” — start with a question. Alumna listens like a counsellor, replies like your smartest senior.",
    },
    {
        step: "Step 2",
        title: "Your Data + Our Brain = Tailored Results",
        description:
            "The AI processes your preferences, goals, location, budget, and performance — then matches you with options you’d actually choose.",
    },
    {
        step: "Step 3",
        title: "Take Action, With Backup",
        description:
            "SOPs, resumes, deadlines — handled.\nUpdates, alerts, reminders — on point.\nInternship & job match — aligned with your path.",
    },
]

export default function HowAjWork() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-5 mb-10">
                <h1 className="lg:text-[40px] text-[20px] tracking-wide leading-13 font-semibold">How Alumna.ai Works</h1>
                <span className="lg:text-base text-[16px] text-center">Built for Indian students. Backed by AI. Designed to give you answers that actually help — no  <br />agendas, no ads, no noise.</span>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
                <div className="px-10">
                    <Image
                        src="/Image/image.png"
                        alt="Hero Image"
                        width="500"
                        height="500"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex flex-col lg:w-1/2 lg:px-10">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="border border-transparent bg-black text-white bg-opacity-30 rounded-lg shadow-lg flex-1"
                        >
                            <div className="p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] rounded-lg h-full">
                                <CardContent className="bg-black rounded-[10px] p-5 space-y-2 flex flex-col justify-between min-h-[180px]">
                                    <p className="text-sm text-white">{step.step}</p>
                                    <h3 className="text-2xl font-semibold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-gray-300 whitespace-pre-line flex-1">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </div>
    )
}