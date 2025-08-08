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
    <div className='flex flex-col h-[100%] overflow-hidden place-items-center lg:p-0 p-5 dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe]'>
      <div className='lg:mt-20 mt-10'>
        <h2 className="lg:text-[32px] text-base dark:text-white text-black font-bold text-center">Drop Your Resume & Let the Right Job Find You</h2>
        <div className=" lg:w-[634px] w-full mx-auto mt-10 p-6 rounded-lg text-white space-y-8 bg-gradient-to-t from-white via-white to-white dark:bg-gradient-to-t dark:from-[#0c0c0c82] dark:via-[#2f2f2f23] dark:to-[#2929294f] border-t border-[#ffffff28] shadow-[0_0_10px_6px_rgba(142,142,142,0.15)] dark:shadow-none ">
          <div className="text-sm dark:text-white text-black">Add your document here</div>
          <label
            htmlFor="file-upload"
            className={cn(
              "flex flex-col items-center justify-center border border-dashed border-violet-400 rounded-lg px-6 py-10 cursor-pointer transition hover:bg-[#ffffff08] text-center space-y-2"
            )}
          >
            <UploadCloud className="w-8 h-8 text-violet-300" />
            <p className="text-sm dark:text-white text-black">
              {fileName ? fileName : "Drop your file here,"}{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] ">or click to browse</span>
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
            className="  px-6 py-4 bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] text-white hover:opacity-50"
          >
            Continue
          </Button></div>

        </div>
      </div>

    </div>
  )
}
