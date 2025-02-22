"use client"

import { useState, useEffect, useMemo } from "react"
import { IoTimeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaPlay } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import FilterItems from "../utils/FilterItems"
import { Skeleton } from "@/components/ui/skeleton"

const Hero = ({ data, Key, Value }) => {

  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (data && data.length > 0) setTimeout(() => setLoading(false))
  }, [data])

  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []
    return FilterItems(data, { [Key]: Value }).slice(0, 5)
  }, [data, Key, Value])

  if (loading) return (
    <div className="movieContainer relative w-full h-screen">
      <Skeleton className="absolute inset-0 w-full h-full bg-[var(--theme-700)]" />
      <div className="movieInfo">
        <Skeleton className="h-[20px] w-full md:auto md:h-[64px] bg-[var(--theme-600)]" />
        <Skeleton className="h-[18px] w-1/2 bg-[var(--theme-500)]" />
        <Skeleton className="h-[40px] w-full bg-[var(--theme-600)]" />
        <div className="hidden md:flex space-x-4">
          <Skeleton className="h-[32px] w-[128px] bg-[var(--theme-500)]" />
          <Skeleton className="h-[32px] w-[128px] bg-[var(--theme-600)]" />
        </div>
      </div>
    </div>
  )



  if (!filterMovies.length) return null

  return (
    <div className="movieContainer">
      <ul className="absolute inset-0 w-full h-full">
        {filterMovies.map((movie, index) => (
          <li key={`${movie._id}-${index}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500
                ${index === currentIndex ? "opacity-100" : "opacity-0"}
              `}
          >
            {/* Movie Background */}
            <img
              src={movie.cover}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            {/* Movie Info */}
            <section className="movieInfo">

              <h1 className="text-[#f4f8fb] text-lg lg:text-4xl font-bold">{movie.title}</h1>
              <p className="text-[#f4f8fb] flex items-center space-x-2 text-lg">
                <IoTimeOutline />
                <span>{movie.duration} min</span>
                <span>|</span>
                <span>{movie.release}</span>
              </p>
              <p className="movieDescription">{movie.description}</p>

              <div className="flex space-x-4">
                <button className="btnMovie text-[#f4f8fb] bg-[var(--theme-500)] hover:bg-[var(--theme-400)]">
                  <FaPlay />
                  <span>Watch Now</span>
                </button>
                <button className="btnMovie bg-[var(--theme-700)]  hover:bg-[var(--theme-800)]">
                  <IoInformationCircleOutline className="text-2xl" />
                  <span>More Info</span>
                </button>
              </div>
            </section>
          </li>
        ))}
      </ul>

      {/* Dots Navigation */}
      <div className="flex absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
        {filterMovies.map((_, index) => (
          <GoDotFill
            key={index}
            className={`w-6 h-6 lg:w-8 lg:h-8 cursor-pointer transition ${
              index === currentIndex ? "text-[#f4f8fb] scale-125" : "text-[var(--theme-600)]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero