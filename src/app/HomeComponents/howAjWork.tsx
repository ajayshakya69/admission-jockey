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
                <h1 className="lg:text-[40px] text-[24px] tracking-wide leading-13 font-bold dark:text-white text-black">How Alumna.ai Works</h1>
                <span className="lg:text-base text-[14px] text-center dark:text-white text-black">Built for Indian students. Backed by AI. Designed to give you answers that actually help — no  <br className="lg:block hidden" />agendas, no ads, no noise.</span>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
                <div className="lg:px-10">
                    <Image
                        src="/Group.png"
                        alt="Hero Image"
                        width="500"
                        height="500"
                        className="rounded-lg dark:block hidden"
                    />
                    <Image
                        src="/lightmodeillustration.svg"
                        alt="Hero Image Light"
                        width={500}
                        height={500}
                        className="rounded-lg block dark:hidden"
                    />
                </div>
                <div className="flex flex-col lg:w-1/2 lg:px-10">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="bg-transparent shadow-none"
                        >
                            <div className="p-[1px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] shadow-[0_0_20px_6px_rgba(199,211,234,0.15)] dark:shadow-none rounded-lg h-full">
                                <CardContent className="dark:bg-black bg-[#FEFEFE] dark:text-white rounded-[10px] p-5 space-y-2 flex flex-col justify-between min-h-[180px]">
                                    <p className="text-sm dark:text-white text-black">{step.step}</p>
                                    <h3 className="lg:text-2xl text-[16px] font-semibold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent">
                                        {step.title}
                                    </h3>
                                    <p className="lg:text-base text-[14px] dark:text-white text-black whitespace-pre-line flex-1">
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