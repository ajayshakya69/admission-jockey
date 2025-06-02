'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UploadCloud } from "lucide-react"

export default function ResumeDrop() {
  const [fileName, setFileName] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleContinue = () => {
    router.push('/dashboard/internship')  // 👈 Update path if your internship page is different
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-xl text-white space-y-8 bg-gradient-to-t from-[#0c0c0c82] via-[#2f2f2f23] to-[#2929294f] border-t border-[#ffffff28]">
      <h2 className="text-xl font-bold text-center">Drop your resume. Find your fit.</h2>

      <div className="text-sm text-zinc-400">Add your document here</div>
      <label
        htmlFor="file-upload"
        className={cn(
          "flex flex-col items-center justify-center border border-dashed border-violet-400 rounded-lg px-6 py-10 cursor-pointer transition hover:bg-[#ffffff08] text-center space-y-2"
        )}
      >
        <UploadCloud className="w-8 h-8 text-violet-300" />
        <p className="text-sm text-white">
          {fileName ? fileName : "Drop your file here,"}{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">or click to browse</span>
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <div className='flex justify-center'><Button
        disabled={!fileName}
        onClick={handleContinue}
        className="  px-6 py-4 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white hover:opacity-90"
      >
        Continue
      </Button></div>

    </div>
  )
}
