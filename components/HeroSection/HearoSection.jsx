'use client'

import ScribbleIcon from '@/components/ui/ScribbleIcon'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { FaRegSun } from 'react-icons/fa6'

export default function HearoSection({ from = 0, to = 1000, duration = 2 }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration })
      return controls.stop
    }
  }, [isInView, count, to, duration])

  const images = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/drjvnfcxi/image/upload/v1762093994/img3_qrtuju.jpg',
      alt: 'hero 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/drjvnfcxi/image/upload/v1762094162/img4_ssgteh.jpg',
      alt: 'hero 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/drjvnfcxi/image/upload/v1762094209/img5_kel1bo.jpg',
      alt: 'hero 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/drjvnfcxi/image/upload/v1762303291/pexels-shkrabaanthony-5243989_ibcx0b.jpg',
      alt: 'hero 4',
    },
  ]

  return (
    <div
      ref={sectionRef}
      className="container relative mx-auto flex flex-col mt-32 justify-center "
    >
      <motion.div
        className="text-center text-7xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <p className="mb-10">قم ببناء وتطوير وإدارة</p>
        <p>علامتك التجارية</p>
      </motion.div>

      <motion.div
        className="text-center md:my-22 my-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <p>
          نحن نطبق علامتك التجارية من أجلك بدون أي متاعب لضمان بقاء مواد الاتصال
          الخاصة بك على العلامة التجارية باستمرار.
        </p>
      </motion.div>

      <motion.div
        className="flex md:flex-row flex-col text-center justify-center items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button
          className="py-5 px-10 w-fit rounded-full border-2 bg-darkbg text-darktext
          border-darkbg dark:border-lightbg hover:bg-lightbg
          hover:text-lighttext transition-all dark:bg-lightbg dark:text-lighttext
          dark:hover:text-darktext dark:hover:bg-darkbg"
        >
          البدء
        </button>

        <button
          className="py-5 px-10 w-fit rounded-full border-2 
          border-darkbg dark:border-lightbg hover:bg-darkbg
          hover:text-darktext transition-all dark:hover:text-lighttext 
          dark:hover:bg-lightbg"
        >
          شغل الفيديو
        </button>
      </motion.div>

      <motion.div
        className="flex justify-center my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex">
            <Image
              src="/image/avatar/avatar1.png"
              alt="avatar1"
              width={50}
              height={50}
              className="z-20"
              loading="lazy"
              unoptimized
            />
            <Image
              src="/image/avatar/avatar2.png"
              alt="avatar2"
              width={50}
              height={50}
              className="-mx-5 z-10"
              loading="lazy"
              unoptimized
            />
            <Image
              src="/image/avatar/avatar3.png"
              alt="avatar3"
              width={50}
              height={50}
              className="-z-2"
              loading="lazy"
              unoptimized
            />
          </div>
          <div className="text-[#685044] dark:text-darktext text-xl">
            <p>أكثر من</p>
            <p>
              <motion.span>{rounded}</motion.span> عميل راضي
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-0 px-3 overflow-y-hidden">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute md:-top-[5%] -top-[2%] right-[10%]"
        initial={{ y: 600, opacity: 0, rotate: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{
          y: { duration: 1 },
          opacity: { duration: 1 },
          rotate: { repeat: Infinity, ease: 'linear', duration: 2 },
        }}
      >
        <motion.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
          <FaRegSun className="text-2xl" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute md:top-[20%] -top-[2%] left-[10%]"
        initial={{ x: -600, opacity: 0, rotate: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 360 }}
        transition={{
          x: { duration: 2 },
          opacity: { duration: 1 },
          rotate: { repeat: Infinity, ease: 'linear', duration: 2 },
        }}
      >
        <motion.div
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
          <FaRegSun className="text-2xl" />
        </motion.div>
      </motion.div>

      
    </div>
  )
}
