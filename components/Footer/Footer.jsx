import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";



const links1 = [
  { name: 'العمل', href: '#' },
  { name: 'حول', href: '#' },
  { name: 'الخدمات', href: '#' },
  { name: 'الاتصال', href: '#' },
  { name: 'المهن', href: '#' },
]
const links2 = [
  { name: 'مقالات الدعم', href: '#' },
  { name: 'التدوين', href: '#' },
  { name: 'برنامج المنتسبين', href: '#' },
  { name: 'ابحث عن مدرب العلامة التجارية', href: '#' },
  { name: 'سياسة الخصوصية', href: '#' },
]

export default function Footer() {
  return (
    <div className="bg-darkbg dark:bg-lightbg py-20">
      <div className="container mx-auto text-lightbg dark:text-darkbg">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-0 px-3 ">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center mb-10">
              <p className="font-semibold text-lg">تطور</p>
              <Image
                src="/image/logo/ايقونة.svg"
                alt="logo"
                width={40}
                height={40}
                className="bg-lightbg rounded-[4px]"
                priority
              />
            </div>
            <p>
              نحن نطبق علامتك التجارية من أجلك، بدون إزعاج. لضمان أن تبقى مواد
              الاتصال الخاصة بك ثابتة على العلامة التجارية.
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="">
              <p className="mb-10 font-bold">تطور</p>
              <ul className="flex-col flex gap-5">
                {links1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lightbg/50 dark:text-darkbg/50 dark:hover:text-darkbg hover:text-lightbg transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-10 font-bold">تطور</p>
              <ul className="flex-col flex gap-5 ">
                {links2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lightbg/50 dark:text-darkbg/50 dark:hover:text-darkbg hover:text-lightbg transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-10">آخر أخبار العلامة التجارية</p>
            <Image
              src={'https://res.cloudinary.com/drjvnfcxi/image/upload/v1731887030/samples/imagecon-group.jpg'}
              className="rounded-xl"
              alt="hero"
              width={300}
              height={300}
            />
            <div className="mt-10 flex-row flex gap-5">
              <div className="bg-white  text-darkbg hover:text-lightbg hover:bg-[#685044] w-10 h-10 rounded-full flex items-center justify-center">
                <Link href={'#'}>
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="bg-white  text-darkbg hover:text-lightbg hover:bg-[#685044] w-10 h-10 rounded-full flex items-center justify-center">
                <Link href={'#'}>
                  <FaGithub />
                </Link>
              </div>
              <div className="bg-white  text-darkbg hover:text-lightbg hover:bg-[#685044] w-10 h-10 rounded-full flex items-center justify-center">
                <Link href={'#'}>
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
