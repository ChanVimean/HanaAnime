"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { IoTimeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaPlay } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import FilterItems from "../utils/FilterItems"
import { Skeleton } from "@/components/ui/skeleton"
import styles from "../styles/Hero.module.css"

const Hero = ({ data, Key, Value }) => {

  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (data && data.length > 0) setTimeout(() => setLoading(false))
  }, [data])

  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []
    return FilterItems(data, { [Key]: Value }).slice(0, 5)
  }, [data, Key, Value])

  // Auto Slide in every 3 seconds
  useEffect(() => {
    if (filterMovies.length <= 1) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % filterMovies.length)
    }, 3000)

    return () => clearInterval(intervalRef.current)
  }, [filterMovies.length])

  if (loading) return (
    <div className={`${styles.movieContainer} w-full h-screen`}>
      <Skeleton className={styles.SkeletonBanner} />
      <div className={styles.movieInfo}>
        <Skeleton className={styles.SkeletonTitle} />
        <Skeleton className={styles.SkeletonDuration} />
        <Skeleton className={styles.SkeletonDescription} />
        <div className={styles.SkeletonContainer}>
          <Skeleton className={styles.SkeletonWatchNow} />
          <Skeleton className={styles.SkeletonDetail} />
        </div>
      </div>
    </div>
  )

  if (!filterMovies.length) return null

  return (
    <div className={styles.movieContainer}>
      <ul className={styles.HeroMain}>
        {filterMovies.map((movie, index) => (
          <li key={`${movie._id}-${index}`}
              className={`${styles.HeroListContainer}
                          ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            {/* Movie Background */}
            <img
              src={movie.cover}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            {/* Movie Info */}
            <section className={styles.movieInfo}>

              <h1 className={styles.InfoTitle}>{movie.title}</h1>
              <p className={styles.InfoDuration}>
                <IoTimeOutline />
                <span>{movie.duration} min</span>
                <span>|</span>
                <span>{movie.release}</span>
              </p>
              <p className={styles.movieDescription}>{movie.description}</p>

              <div className="flex space-x-4">
                <button className={styles.InfoWatchNow}>
                  <FaPlay />
                  <span>Watch Now</span>
                </button>
                <button className={styles.InfoDetail}>
                  <IoInformationCircleOutline className="text-2xl" />
                  <span>More Info</span>
                </button>
              </div>
            </section>
          </li>
        ))}
      </ul>

      {/* Dots Navigation */}
      <div className={styles.DotContainer}>
        {filterMovies.map((_, index) => (
          <GoDotFill
            key={index}
            className={`${styles.Dots} ${
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