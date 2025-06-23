import { Card, CardContent } from "@/components/ui/card"

export function MoreInstitutions() {
  return (
    <div className="overflow-hidden rounded-[8px]">
      <Card className="relative bg-transparent rounded-2xl h-full flex items-center justify-center lg:min-h-[400px] min-h-[300px]">
        {/* Blurred Background Layer */}
        <div className="absolute inset-0 dark:bg-[#ffffff10] bg-[#00000023] blur-lg rounded-[8px] z-0" />

        {/* Foreground Text Content */}
        <CardContent className="relative z-10 p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold dark:text-gray-300 text-[#000000b6] leading-tight">
              More institutions
              <br />
              being added soon.
            </h3>
            <p className="text-3xl md:text-4xl font-bold bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] bg-clip-text text-transparent">
              STAY TUNED!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
