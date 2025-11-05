'use client'

import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { motion, spring } from 'framer-motion'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { name: 'بيت', href: 'home' },
  { name: 'خدمة', href: 'services' },
  { name: 'التسعير', href: 'about' },
  { name: 'الدعم', href: 'support' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (sectionId) => {
    setIsOpen(false)

    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        const yOffset = -64
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#F9DEC9]/80 dark:bg-darkbg/80 backdrop-blur-md shadow-sm transition-colors duration-300"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, stiffness: 200, type: spring }}
    >
      <div className="container mx-auto flex items-center justify-between md:flex-row flex-row-reverse h-16 px-4">
        {/* Logo section */}
        <button
          onClick={() => handleNavigation('home')}
          className="flex items-center gap-3"
        >
          <p className="font-semibold text-lg">تطور</p>
          <Image
            src="/image/logo/ايقونة.svg"
            alt="logo"
            width={40}
            height={40}
            className="dark:bg-lightbg dark:rounded-[4px]"
            priority
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch h-full gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link.href)}
                className="flex items-center justify-center h-full rounded-2xl hover:bg-darkbg
                hover:text-darktext dark:hover:bg-lightbg dark:hover:text-lighttext px-4 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side section */}
        <div className="flex items-stretch h-full gap-5">
          <button
            onClick={() => handleNavigation('contact')}
            className="hidden md:flex items-center h-full justify-center rounded-2xl hover:bg-darkbg hover:text-darktext dark:hover:bg-lightbg dark:hover:text-lighttext px-4 transition"
          >
            اتصال
          </button>
          <ThemeToggle />

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
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className="text-lg hover:text-primary transition"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigation('contact')}
            className="text-lg hover:text-primary transition"
          >
            اتصال
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
