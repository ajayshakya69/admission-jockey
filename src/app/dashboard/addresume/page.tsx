'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UploadCloud } from "lucide-react"
import Link from 'next/link'

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
    <div className='flex flex-col max-h-screen relative'>
    <div className="absolute inset-0 z-20 flex flex-col place-items-center justify-center px-4 text-center bg-black/60 backdrop-blur-sm top-50 ">
        <p className="text-md md:text-xl font-semibold">
          Soon you'll be chatting with your future seniors
        </p>
        <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] my-2">
          — STAY CONNECTED!
        </h2>
        <div className="lg:w-100 w-60 h-[1px] my-10 bg-[#fffcfc94]">
        </div>
        <p className="text-sm md:text-lg text-zinc-300">
          <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
            Hey Alumnis
          </span>
          <br />
          Join our alumni network to stay connected
          <br className="hidden md:block" />
          and inspire the next generation.
        </p>
        <Link href="/dashboard/register" className="w-full">
          <button className="mt-6 px-6 py-2 rounded-md bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white text-sm font-medium">
            Register
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
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
    </div>
  )
}
