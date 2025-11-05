'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GiFlowerStar } from 'react-icons/gi'
export default function About() {
  return (
    <div className="container mx-auto py-20 overflow-hidden"
    id='about'>
      <div className="flex md:flex-row flex-col items-center justify-between">
        <motion.div
          className="flex flex-col px-3 md:px-0 "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className=" text-5xl mb-4">نحن نفكر كإستراتيجيات. </p>
            <p className=" text-5xl ">نحن نعمل كمبدعين.</p>
            <p className="my-10 text-[15px]">
              الرؤى والرؤى تصميم العلامة التجارية تصميم العلامة التجارية التصميم
              الرقمي
            </p>
          </div>
          <button
            className="py-5 px-10 w-fit rounded-full border-2 bg-darkbg text-darktext
          border-darkbg dark:border-lightbg hover:bg-lightbg
          hover:text-lighttext transition-all dark:bg-lightbg dark:text-lighttext
          dark:hover:text-darktext dark:hover:bg-darkbg"
          >
            العمل الابداعي
          </button>
        </motion.div>
        <div className="flex md:flex-row flex-col md:mt-0 mt-5 gap-5">
          <motion.div
            className="relative "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="https://res.cloudinary.com/drjvnfcxi/image/upload/v1762358934/pexels-fauxels-3184434_stcrkc.jpg"
              alt="about"
              width={0}
              height={0}
              loading="lazy"
              sizes="100vw"
              className="w-72 h-72 object-cover rounded-xl"
            />
            <div className="w-16 h-16 bg-lightbg dark:bg-darkbg text-4xl flex items-center justify-center absolute -top-3 -right-3 rounded-full">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              >
                <GiFlowerStar />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="relative "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="https://res.cloudinary.com/drjvnfcxi/image/upload/v1762303412/pexels-kindelmedia-6774439_j9iyal.jpg"
              alt="about"
              width={0}
              height={0}
              loading="lazy"
              sizes="100vw"
              className="w-72 h-72 object-cover rounded-xl"
            />
            <div className="w-16 h-16 bg-lightbg dark:bg-darkbg text-4xl flex items-center justify-center absolute -top-3 -right-3 rounded-full">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              >
                <GiFlowerStar />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
