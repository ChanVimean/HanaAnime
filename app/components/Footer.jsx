"se client"

import { FaFacebook, FaYoutube, FaCode, FaPhoneAlt   } from "react-icons/fa"
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6"
import { SiDailymotion } from "react-icons/si"
import { RiTeamLine } from "react-icons/ri"
import { IoMdPin } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import Link from "next/link"

const Footer = () => {



  return (
    <div className="bg-[var(--theme-900)] text-[var(--theme-50)] shadow-inner shadow-slate-700]">

      {/* Main Footer */}
      <footer className="flex flex-wrap w-full py-5 px-5 lg:px-10 lg:space-y-0 justify-center lg:justify-between gap-16">

        {/* About Us */}
        <section className="space-y-8 flex-1 min-w-[250px] md:w-1/2 lg:w-1/6">
          <h1 className="text-[var(--theme-50)] text-3xl font-semibold text-center lg:text-start">About Us</h1>
          <p className="text-[var(--theme-50)] text-xl">
            Experience the magic of Anime & Donghua
            with our free streaming platform. We offer
            a vast selection of titles, including the latest
            releases and classic favorites. All avaialble
            with subtitles for your enjoyment.
          </p>
          <ul className="flex space-x-3 items-center">
            <li className="text-[var(--theme-50)] text-4xl wrap-btn"><FaFacebook /></li>
            <li className="text-[var(--theme-50)] text-4xl wrap-btn"><FaSquareInstagram  /></li>
            <li className="text-[var(--theme-50)] text-50 text-4xl wrap-btn"><FaXTwitter /></li>
            <li className="text-[var(--theme-50)] text-4xl wrap-btn"><SiDailymotion /></li>
            <li className="text-[var(--theme-50)] text-4xl wrap-btn"><FaYoutube /></li>
          </ul>
        </section>

        {/* Genres */}
        <section className="space-y-8 flex-1 min-w-[250px] md:w-1/2 lg:w-1/6">
          <h1 className="text-[var(--theme-50)] text-3xl text-center font-semibold">Genres</h1>
          <div className="flex items-start justify-center space-x-4">
            <ul className="text-center">
              <li><Link href={""} className="relative underline-animation">Action</Link></li>
              <li><Link href={""} className="relative underline-animation">Comedy</Link></li>
              <li><Link href={""} className="relative underline-animation">Crime</Link></li>
              <li><Link href={""} className="relative underline-animation">Horror</Link></li>
              <li><Link href={""} className="relative underline-animation">Sci-Fi</Link></li>
              <li><Link href={""} className="relative underline-animation">Fantasy</Link></li>
              <li><Link href={""} className="relative underline-animation">Romance</Link></li>
              <li><Link href={""} className="relative underline-animation">Thriller</Link></li>
              <li><Link href={""} className="relative underline-animation">Adventure</Link></li>
            </ul>
            <ul className="text-center">
              <li><Link href={""}className="relative underline-animation" >Anime</Link></li>
              <li><Link href={""} className="relative underline-animation">Donghua</Link></li>
              <li><Link href={""} className="relative underline-animation">War</Link></li>
              <li><Link href={""} className="relative underline-animation">Documentary</Link></li>
              <li><Link href={""} className="relative underline-animation">Mystery</Link></li>
            </ul>
          </div>
        </section>

        {/* Credit & Contact */}
        <section className="space-y-8 flex-1 min-w-[250px] md:w-1/2 lg:w-3/6">
          <h1 className="text-[var(--theme-50)] text-3xl font-semibold text-center lg:text-start">Credit & Contact</h1>
          <ul className="space-y-4">
            <li className="flex text-xl items-center">
              <span className="pe-2 text-3xl"><FaCode /></span>
              Developed by
              <span className="px-2">
                <Link href={""} className="text-blue-400 wrap-btn font-medium">Chan Vimean</Link>
              </span>
            </li>
            <li className="flex text-xl items-center">
              <span className="pe-2 text-3xl"><RiTeamLine /></span>
              Team:
              <span className="px-2">
                <Link href={""} className="text-blue-400 wrap-btn font-medium">Rok Rak Developers</Link>
              </span>
            </li>
            <li className="flex text-xl items-center">
              <span className="pe-2 text-3xl"><IoMdPin /></span>
              <Link href={""} className="wrap-btn font-medium">
                (RULE) Royal University of Law and Economics
              </Link>
            </li>
            <li className="flex text-xl items-center">
              <span className="pe-2 text-3xl"><MdEmail  /></span>
              <Link href={""} className="text-blue-400 wrap-btn font-medium">
                rokrakdev@gmail.com
              </Link>
            </li>
            <li className="flex text-xl items-center">
              <span className="pe-2 text-3xl"><FaPhoneAlt  /></span>
              <Link href={""} className="wrap-btn font-medium">
                (+855) 12 345 678
              </Link>
            </li>
          </ul>
        </section>

        {/* Support */}
        <section className="space-y-8 flex-1 min-w-[250px] md:w-1/2 lg:w-1/6">
          <h1 className="text-[var(--theme-50)] text-3xl font-semibold text-center">Support</h1>
          <ul className="space-y-4 text-center">
            <li>
              <Link href={""} className="relative underline-animation text-xl">Customer Service</Link>
            </li>
            <li>
              <Link href={""} className="relative underline-animation text-xl">FAQs</Link>
            </li>
            <li>
              <Link href={""} className="relative underline-animation text-xl">Cookie Policy</Link>
            </li>
            <li>
              <Link href={""} className="relative underline-animation text-xl">Terms of Service</Link>
            </li>
          </ul>
        </section>

      </footer>

      {/* Original */}
      <div className="text-center text-xl bg-[var(--theme-800)] py-4">
        Original 2025 by
        <span className="px-2">
          <Link href={""} className="wrap-btn text-blue-400 font-medium">Rok Rak Developers</Link>
        </span>
        |
        <span className="px-2">
          <Link href={""} className="wrap-btn text-blue-400 font-medium">Privacy Policy</Link>
        </span>
      </div>

    </div>
  )
}
 
export default Footer