'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { useStairs } from '@/components/stairs/StairsContext'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const { startTransition, endTransition } = useStairs()

  useEffect(() =>  setMounted(true), [])

  const handleThemeChange = (newTheme: string) => {
    // Start the stairs transition
    startTransition()
    
    // Change the theme
    setTheme(newTheme)
    
    // End the transition after a delay
    setTimeout(() => {
      endTransition()
    }, 600) // This should match the duration of your stairs animation
  }

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
      className="w-9 h-9 px-2"
    />
  )

  if (resolvedTheme === 'dark') {
    return <FiSun onClick={() => handleThemeChange('light')} className="cursor-pointer" />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon onClick={() => handleThemeChange('dark')} className="cursor-pointer" />
  }

}