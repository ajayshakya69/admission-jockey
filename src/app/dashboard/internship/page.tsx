import InternshipCard from "./InternshipCard"
import FilterSidebar from "./FilterSidebar"

export default function InternshipList() {
  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
        </div>
        <FilterSidebar />
      </div>
    </div>
  )
}
