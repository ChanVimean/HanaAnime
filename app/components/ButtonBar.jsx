"use client"

import Link from "next/link"
import { TiHome } from "react-icons/ti"
import { MdMovieFilter } from "react-icons/md"
import { TbMovie } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io"
import styles from "../styles/BottomBar.module.css"


const ButtonBar = () => {
  return (
    <main className={styles.BBContainer}>
      <ul className={styles.BBListContainer}>
        <li className={styles.BBList}>
          <Link href={""} className={`${styles.BBIcon} wrap-btn`}><TiHome /></Link>
          <Link href={""} className={`${styles.BBText} wrap-btn`}>Home</Link>
        </li>
        <li className={styles.BBList}>
          <Link href={""} className={`${styles.BBIcon} wrap-btn`}><MdMovieFilter /></Link>
          <Link href={""} className={`${styles.BBText} wrap-btn`}>Movies</Link>
        </li>
        <li className={styles.BBList}>
          <Link href={""} className={`${styles.BBIcon} wrap-btn`}><TbMovie /></Link>
          <Link href={""} className={`${styles.BBText} wrap-btn`}>Series</Link>
        </li>
        <li className={styles.BBList}>
          <Link href={""} className={`${styles.BBIcon} wrap-btn`}><IoMdSettings /></Link>
          <Link href={""} className={`${styles.BBText} wrap-btn`}>Setting</Link>
        </li>
      </ul>
    </main>
  )
}

export default ButtonBar
