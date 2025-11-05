'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowsToDot } from 'react-icons/fa6'
import { GoNorthStar } from 'react-icons/go'
import { LuCircleArrowOutDownLeft } from 'react-icons/lu'
import { TbUxCircle } from 'react-icons/tb'

export default function Services() {
  return (
    <div className="py-20 bg-white dark:bg-[#685044] overflow-hidden">
      <div className="container mx-auto md:px-0 px-3">
        <div className='flex items-center justify-center'>
          <motion.p
            className="text-5xl mb-10 md:text-start "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            منصة العلامة التجارية المصممة لدعم الشركات الناشئة
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5  ">
          <motion.div
            className="bg-[#99B2DD]/20 pt-10 px-10 pb-5 rounded-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-5 text-3xl">
              <GoNorthStar />
            </p>
            <p className="font-bold mb-3 [word-spacing:0.5rem]">
              التميز العالمي
            </p>
            <p className="mb-10">
              مراجعة تعريف ريادي الأعمال للتخطيط للعلامات التجارية مرة أخرى، هدف
              العلامة التجارية هو التمييز لمؤسستك.
            </p>
            <Link href="#" className="underline">
              تعرف أكثر
            </Link>
          </motion.div>
          <motion.div
            className="bg-[#99B2DD]/20 pt-10 px-10 pb-5 rounded-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-5 text-3xl">
              <LuCircleArrowOutDownLeft />
            </p>
            <p className="font-bold mb-3 [word-spacing:0.5rem]">تطوير</p>
            <p className="mb-10">
              تصميم وتطوير موقع إبداعي. نقوم بتخصيص جميع المواقع لتناسب
              احتياجاتك، سواء كان ذلك موقعًا للتسوق عبر الإنترنت أو غيره.
            </p>
            <Link href="#" className="underline">
              تعرف أكثر
            </Link>
          </motion.div>
          <motion.div
            className="bg-[#99B2DD]/20 pt-10 px-10 pb-5 rounded-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-5 text-3xl">
              <TbUxCircle />
            </p>
            <p className="font-bold mb-3 [word-spacing:0.5rem]">UI/UX</p>
            <p className="mb-10">
              نجعل التطبيقات المعقدة سهلة للمستخدمين. سنكون سعداء بتنفيذ أفكارك
              في واجهة مستخدم سلسة وتجربة مستخدم ذات معنى.
            </p>
            <Link href="#" className="underline">
              تعرف أكثر
            </Link>
          </motion.div>
          <motion.div
            className="bg-[#99B2DD]/20 pt-10 px-10 pb-5 rounded-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-5 text-3xl">
              <FaArrowsToDot />
            </p>
            <p className="font-bold mb-3 [word-spacing:0.5rem]">الترويج</p>
            <p className="mb-10">
              تكامل وسائل التواصل الاجتماعي. كن واثقًا بأننا نعرف ونفهم أهمية
              وسائل التواصل الاجتماعي.
            </p>
            <Link href="#" className="underline">
              تعرف أكثر
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
