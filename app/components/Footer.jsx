"use client"

import { FaFacebook, FaYoutube, FaCode, FaPhoneAlt   } from "react-icons/fa"
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6"
import { SiDailymotion } from "react-icons/si"
import { RiTeamLine } from "react-icons/ri"
import { IoMdPin } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import styles from "../styles/Footer.module.css"
import { useState } from "react"

const Footer = () => {

  const [name, setName] = useState("Chan Vimean")
  const [devTeam, setDevTeam] = useState("Rok Rak Developers")
  const [location, setLocation] = useState("(RULE) Royal University of Law and Economics")
  const [email, setEmail] = useState("rokrakdev@gmail.com")
  const [contact, setContact] = useState('(+855) 12 345 678')

  return (
    <div className={styles.FooterContainer}>

      {/* Main Footer */}
      <footer className={styles.FooterMain}>

        {/* About Us */}
        <section className={styles.ContainerOneSix}>
          <h1 className={styles.AboutUsHeader}>About Us</h1>
          <p className={styles.AboutUsText}>
            Experience the magic of Anime & Donghua
            with our free streaming platform. We offer
            a vast selection of titles, including the latest
            releases and classic favorites. All avaialble
            with subtitles for your enjoyment.
          </p>
          <ul className={styles.AboutUsListContainer}>
            <li className={`${styles.AboutUsList} wrap-btn`}><FaFacebook /></li>
            <li className={`${styles.AboutUsList} wrap-btn`}><FaSquareInstagram  /></li>
            <li className={`${styles.AboutUsList} wrap-btn`}><FaXTwitter /></li>
            <li className={`${styles.AboutUsList} wrap-btn`}><SiDailymotion /></li>
            <li className={`${styles.AboutUsList} wrap-btn`}><FaYoutube /></li>
          </ul>
        </section>

        {/* Genres */}
        <section className={styles.ContainerOneSix}>
          <h1 className={styles.GenresHeader}>Genres</h1>
          <div className={styles.GenresContainer}>
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
        <section className={styles.ContainerThirdSix}>
          <h1 className={styles.CCHeader}>Credit & Contact</h1>
          <ul className="space-y-4">
            <li className={styles.CCList}>
              <span className="pe-2 text-3xl"><FaCode /></span>
              Developed by
              <span className="px-2">
                <Link href={""} className="text-blue-400 wrap-btn font-medium">{name}</Link>
              </span>
            </li>
            <li className={styles.CCList}>
              <span className="pe-2 text-3xl"><RiTeamLine /></span>
              Team:
              <span className="px-2">
                <Link href={""} className="text-blue-400 wrap-btn font-medium">{devTeam}</Link>
              </span>
            </li>
            <li className={styles.CCList}>
              <span className="pe-2 text-3xl"><IoMdPin /></span>
              <Link href={""} className="wrap-btn font-medium">{location}</Link>
            </li>
            <li className={styles.CCList}>
              <span className="pe-2 text-3xl"><MdEmail  /></span>
              <Link href={""} className="text-blue-400 wrap-btn font-medium">{email}</Link>
            </li>
            <li className={styles.CCList}>
              <span className="pe-2 text-3xl"><FaPhoneAlt  /></span>
              <Link href={""} className="wrap-btn font-medium">{contact}</Link>
            </li>
          </ul>
        </section>

        {/* Support */}
        <section className={styles.ContainerOneSix}>
          <h1 className={styles.SupportHeader}>Support</h1>
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
      <div className={styles.FooterOriginal}>
        Original 2025 by
        <span className="px-2">
          <Link href={""} className={`${styles.OriginalLink} wrap-btn`}>Rok Rak Developers</Link>
        </span>
        |
        <span className="px-2">
          <Link href={""} className={`${styles.OriginalLink} wrap-btn`}>Privacy Policy</Link>
        </span>
      </div>

    </div>

  )
}
 
export default Footer