"use client"

import { useMemo, useState } from "react"
import { IoTimeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaPlay } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import FilterItems from "../utils/FilterItems"

const Hero = ({ data, Key, Value }) => {

  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []
    return FilterItems(data, { [Key]: Value }).slice(0, 5)
  }, [data, Key, Value])

  const [currentIndex, setCurrentIndex] = useState(0)

  if (!filterMovies.length) return null

  return (
    <div className="relative text-[var(--theme-50)] w-full  h-[25vh] md:h-[50vh] lg:h-[70vh] overflow-hidden">
      <ul className="absolute inset-0 w-full h-full">
        {filterMovies.map((movie, index) => (
          <li key={`${movie._id}-${index}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Movie Background */}
            <img
              src={movie.cover}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            {/* Movie Info */}
            <section className="absolute bottom-14 left-14 z-10 space-y-4 max-w-xl">

              <h1 className="text-[#f4f8fb] text-4xl font-bold">{movie.title}</h1>
              <p className="text-[#f4f8fb] flex items-center space-x-2 text-lg">
                <IoTimeOutline />
                <span>{movie.duration} mins</span>
                <span>|</span>
                <span>{movie.release}</span>
              </p>
              <p className="text-[#f4f8fb] text-sm opacity-80">{movie.description}</p>

              <div className="flex space-x-4">
                <button className="bg-[var(--theme-500)] text-[#f4f8fb] flex text-lg items-center px-4 py-2 rounded-full space-x-2 transition hover:bg-[var(--theme-600)]">
                  <FaPlay />
                  <span>Watch Now</span>
                </button>
                <button className="bg-[var(--theme-700)] flex text-lg items-center px-4 py-2 rounded-full space-x-2 transition hover:bg-[var(--theme-800)]">
                  <IoInformationCircleOutline />
                  <span>More Info</span>
                </button>
              </div>
            </section>
          </li>
        ))}
      </ul>

      {/* Dots Navigation */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
        {filterMovies.map((_, index) => (
          <GoDotFill
            key={index}
            className={`w-6 h-6 lg:w-8 lg:h-8 cursor-pointer transition ${
              index === currentIndex ? "text-[var(--theme-100)] scale-125" : "text-[var(--theme-600)]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero