"use client"

import Link from "next/link"
import { TiHome } from "react-icons/ti"
import { MdMovieFilter } from "react-icons/md"
import { TbMovie } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io"


const ButtonBar = () => {
  return (
    <main className="block lg:hidden bg-[var(--theme-700)] text-[var(--theme-50)] w-screen py-5 px-10 md:py-8 md:px-16">
      <ul className="flex justify-between">
        <li className="flex flex-col items-center space-y-2">
          <Link href={""} className="text-4xl md:text-5xl wrap-btn"><TiHome /></Link>
          <Link href={""} className="text-xl md:text-2xl underline-animation font-medium">Home</Link>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <Link href={""} className="text-4xl md:text-5xl wrap-btn"><MdMovieFilter /></Link>
          <Link href={""} className="text-xl md:text-2xl underline-animation font-medium">Movies</Link>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <Link href={""} className="text-4xl md:text-5xl wrap-btn"><TbMovie /></Link>
          <Link href={""} className="text-xl md:text-2xl underline-animation font-medium">Series</Link>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <Link href={""} className="text-4xl md:text-5xl wrap-btn"><IoMdSettings /></Link>
          <Link href={""} className="text-xl md:text-2xl underline-animation font-medium">Setting</Link>
        </li>
      </ul>
    </main>
  )
}

export default ButtonBar
