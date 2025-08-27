'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="bg-neutral-950 dark:bg-[#1a1a1a] shadow-md w-full z-10 pl-14 pr-14">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center border-2 border-solid border-red ">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white ">
          Zevion
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-6 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-4xl border border-gray-300 dark:border-neutral-700 bg-transparent dark:bg-neutral-800 text-sm text-white dark:text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Links */}
        <div className=" flex justify-items-end  gap-6 text-white dark:text-[#f5f5dc]">
          <Link href="/playground">Playground</Link>
          <Link href="/blocks">Blocks</Link>
          <Link href="/components">Components</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-6">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-#[1a1a1a]" />
              ) : (
                <MoonIcon className="h-5 w-5 text-white" />
              )}
            </button>
          )}

          {/* Auth buttons */}
          <Link
            href="/login"
            className="text-sm px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 rounded hover:bg-blue-50 dark:hover:bg-neutral-800"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white dark:text-[#1a1a1a] font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
