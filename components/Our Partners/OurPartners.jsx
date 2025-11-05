'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const company = [
  { id: 1, alt: 'copany', src: 'image/logo/qatar.svg' },
  { id: 2, alt: 'copany', src: 'image/logo/etisalat.svg' },
  { id: 3, alt: 'copany', src: 'image/logo/aramco.svg' },
  { id: 4, alt: 'copany', src: 'image/logo/talabat.svg' },
  { id: 5, alt: 'copany', src: 'image/logo/araco.svg' },
  { id: 6, alt: 'copany', src: 'image/logo/eljazeera.svg' },
]

const text = `تحقق من العمل الرائع الذي قمنا به معاً،
كل علامة تجارية فريدة مع منتجات مختلفة، الجمهور المستهدف، وأهداف الأعمال.
هذا هو السبب في أننا نستخدم أفضل الأدوات التكنولوجية في الفصل لتحليل الكميات الكبيرة.`

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

export default function OurPartners() {
  return (
    <div className="bg-white pt-20 dark:bg-[#685044] overflow-hidden"
    id='support'>
      {/* {Part 1} */}
      <div className="container mx-auto mb-16 relative ">
        <motion.div
          className="text-6xl text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className=" mb-3"> هذه فقط عدد قليل من </p>
          <p>الشركات التي تشاركنا معها</p>
        </motion.div>
        <div className="flex flex-col xl:flex-row px-3 xl:px-0 justify-between items-center pb-20 gap-10">
          <motion.div
            className="relative w-full xl:w-1/2 max-w-[500px] h-[300px] sm:h-[400px] xl:h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <Image
                src={
                  'https://res.cloudinary.com/drjvnfcxi/image/upload/v1762188051/img6_jm4epe.jpg'
                }
                alt="partiner"
                fill
                sizes="100vw"
                className="object-cover rounded-t-xl"
              />
            </div>
            <motion.div
              className="absolute -bottom-16 left-0 w-full h-16 rounded-b-xl  text-3xl bg-darkbg flex justify-center items-center text-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ transformOrigin: 'center' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              مشروع UI/UX
            </motion.div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-16 h-[80%] w-16 bg-darkbg text-white text-xl font-semibold xl:flex hidden items-center justify-center rounded-l-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="-rotate-90">الترقية</div>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-28 h-[65%] w-12 bg-darkbg text-white text-base font-semibold xl:flex hidden items-center justify-center rounded-l-xl "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="-rotate-90 whitespace-nowrap">
                العلامة التجارية
              </div>
            </motion.div>
            {/* {moble} */}
            <motion.div
              className="absolute -bottom-32 -translate-x-1/2 left-1/2 w-[80%] h-16 rounded-b-xl text-3xl bg-darkbg xl:hidden justify-center items-center text-white flex "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              الترقية
            </motion.div>
            <motion.div
              className="absolute -bottom-48 -translate-x-1/2 left-1/2 w-[60%] h-16 rounded-b-xl text-3xl bg-darkbg xl:hidden justify-center items-center text-white flex"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              العلامة التجارية
            </motion.div>
          </motion.div>
          <div className="w-full max-w-[600px] px-4 sm:px-6 xl:px-0 mt-52 xl:mt-0 text-center xl:text-right">
            <p className="mb-3 text-sm sm:text-base leading-8">
              {text.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {word + ' '}
                </motion.span>
              ))}
            </p>

            <motion.button
              className="py-3 px-8 sm:py-4 sm:px-10 w-fit rounded-full border-2 bg-darkbg text-white
    border-darkbg dark:border-lightbg hover:bg-lightbg hover:text-lighttext
    transition-all dark:bg-lightbg dark:text-lighttext dark:hover:text-darktext
    dark:hover:bg-darkbg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              شاهد كل العمل
            </motion.button>
          </div>
        </div>
      </div>
      {/* {Part 2} */}

      <div className="w-100 py-20 bg-[#99B2DD]/20">
        <div className="container mx-auto px-3 md:px-0">
          <motion.div
            className="mb-20 text-center text-6xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-3">المستقبل مثير</p>
            <p>دعنا نشكلة سويا.</p>
          </motion.div>
          <motion.div
            className="flex flex-col text-2xl items-center px-3 md:px-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-3">
              ابدأ علامتك التجارية مع افضل فرق العلامات التجارية
            </p>
            <p>اعطنا فرصه لجعل علامتك التجارية افضل.</p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center md:flex-row flex-col mt-5 gap-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <input
              type="text"
              className="py-3 px-5 sm:py-4 sm:px-10 w-fit rounded-full bg-[#99B2DD]/30 outline-none"
              placeholder="اكتب بردك الالكتروني"
            />
            <button
              className="py-3 px-8 sm:py-4 sm:px-10 w-fit rounded-full border-2 bg-darkbg text-white
    border-darkbg dark:border-lightbg hover:bg-lightbg hover:text-lighttext
    transition-all dark:bg-lightbg dark:text-lighttext dark:hover:text-darktext
    dark:hover:bg-darkbg"
            >
              بدأالعمل
            </button>
          </motion.div>
          <hr className="mt-10 border-t-2 border-[#99B2DD]/50 mb-5 " />
          <motion.div
            className="grid md:grid-cols-3 grid-cols-1 justify-center items-center  gap-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {company.map((img) => (
              <div key={img.id} className="flex justify-center items-center">
                <Image src={img.src} alt={img.alt} width={200} height={200} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
