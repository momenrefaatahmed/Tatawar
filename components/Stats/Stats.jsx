'use client'

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const projectCount = useMotionValue(0)
  const awardCount = useMotionValue(0)
  const branchCount = useMotionValue(0)

  const CompletedProjects = useTransform(projectCount, (latest) =>
    Math.floor(latest)
  )
  const AwardsWon = useTransform(awardCount, (latest) => Math.floor(latest))
  const Branches = useTransform(branchCount, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      animate(projectCount, 120, { duration: 2 })
      animate(awardCount, 35, { duration: 2 })
      animate(branchCount, 15, { duration: 2 })
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      className="bg-darkbg text-darktext dark:bg-lightbg dark:text-lighttext mt-10 overflow-hidden"
    >
      <div className="container mx-auto flex justify-center md:flex-row flex-col py-20">
        <div className="flex flex-col text-center md:w-[500px] w-full">
          <motion.p className="font-bold text-7xl">
            {CompletedProjects}
          </motion.p>
          <p>المشاريع المكتملة</p>
        </div>

        <div className="flex flex-col text-center md:w-[500px] md:my-0 my-10 py-10 md:py-0 w-full border-lightbg dark:border-darkbg md:border-x-2 md:border-y-0 border-y-2 border-x-0">
          <motion.p className="font-bold text-7xl">{AwardsWon}</motion.p>
          <p>الجوائز المكتسبة</p>
        </div>

        <div className="flex flex-col text-center md:w-[500px] w-full">
          <motion.p className="font-bold text-7xl">{Branches}</motion.p>
          <p>الفروع</p>
        </div>
      </div>
    </section>
  )
}
