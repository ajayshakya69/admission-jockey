'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='flex justify-between place-items-center w-full lg:w-auto'>
      <span className='lg:hidden block dark:text-white text-black'>Theme</span>
      <button
        className="p-2 rounded-full text-white hover:bg-gray-500 bg-gray-400 dark:bg-[#ffffff18] dark:hover:bg-[#ffffff20] transition"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6 " />}
      </button>
    </div>

  )
}
