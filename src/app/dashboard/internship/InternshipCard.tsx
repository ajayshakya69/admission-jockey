import { Button } from "@/components/ui/button"

export default function InternshipCard() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-black/80 p-6 rounded-xl shadow-md text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-white/10" />
        <div>
          <h3 className="text-lg font-semibold text-pink-300">Data Engineer Internship</h3>
          <p className="text-sm text-zinc-400">MathonGo Limited</p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-sm text-zinc-300">
            <div>
              <div className="text-xs text-zinc-500">Stipend</div>
              5K–10K
            </div>
            <div>
              <div className="text-xs text-zinc-500">Duration</div>
              6 months
            </div>
            <div>
              <div className="text-xs text-zinc-500">Mode</div>
              5–7 hours
            </div>
            <div>
              <div className="text-xs text-zinc-500">Location</div>
              <span className="font-semibold text-white">Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2">Apply</Button>
    </div>
  )
}
