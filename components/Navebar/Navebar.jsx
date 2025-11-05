'use client'

import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { motion, spring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { name: 'بيت', href: '#' },
  { name: 'خدمة', href: '#' },
  { name: 'التسعير', href: '#' },
  { name: 'الدعم', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#F9DEC9/80] dark:bg-darkbg/80 backdrop-blur-md shadow-sm transition-colors duration-300 "
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, stiffness: 200, type: spring }}
    >
      <div className="container mx-auto flex items-center justify-between md:flex-row flex-row-reverse h-16 px-4">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <p className="font-semibold text-lg">تطور</p>
          <Image
            src="/image/logo/ايقونة.svg"
            alt="logo"
            width={40}
            height={40}
            className="dark:bg-lightbg dark:rounded-[4px]"
            priority
          />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch h-full gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="flex items-center justify-center h-full rounded-2xl hover:bg-darkbg
            hover:text-darktext dark:hover:bg-lightbg dark:hover:text-lighttext px-4 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side section */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center h-full">
            <Link
              href="#"
              className="flex items-center justify-center h-full rounded-2xl hover:bg-darkbg hover:text-darktext dark:hover:bg-lightbg dark:hover:text-lighttext px-4 transition"
            >
              اتصال
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-[80px] left-0 w-full bg-white dark:bg-[#111] rounded-lg shadow-md flex flex-col items-center gap-4 py-6 transform transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition"
          >
            اتصال
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
