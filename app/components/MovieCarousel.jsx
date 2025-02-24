"use client"

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io"
import { Skeleton } from "@/components/ui/skeleton"

import { useState, useEffect, useMemo, useRef } from "react"
import styles from "../styles/Carousel.module.css"
import FilterItems from "../utils/FilterItems"
import Model from "./Model"


const MovieCarousel = ({ title, data, Key, Value }) => {

  const [loading, setLoading] = useState(true)
  const [visibleItems, setVisibleItems] = useState(12)
  const [selectedId, setSelectedId] = useState(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (data && data.length > 0) setTimeout(() => setLoading(false), 1000)
  }, [data])

  useEffect(() => {
    const updateVisibleItems = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth
        const itemWdith = 200
        const newVisibleItems = Math.floor(containerWidth / itemWdith) || 1

        if (!loading) setVisibleItems(newVisibleItems)
      }
    }

    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [loading])

  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []

    const filtered = FilterItems(data, { [Key]: Value })

    return filtered
  }, [data, Key, Value])

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth / 10, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth / 10, behavior: "smooth" })

  }

  return (
    <div className="text-[var(--theme-50)] px-3 py-5 space-y-4">
      <h1 className="text-3xl font-semibold ps-4">{title}</h1>
      <section className="flex items-center gap-1">
        <button
          onClick={scrollLeft}
          className="hidden md:block text-4xl lg:text-6xl wrap-btn"
        >
          <IoIosArrowBack />
        </button>
        <ul ref={carouselRef} className={`${styles.carouselContainer} scrollbar-hide`}>
          { loading ? (
              // Show Skeleton
              Array.from({ length: visibleItems }).map((_, index) => (
                <li key={index} className={`${styles.carouselItem}`}>
                  <Skeleton className={`${styles.imageFrame} bg-[var(--theme-700)]`} />
                </li>
              ))
            ) : (
              // Show actual movies
              filterMovies.map((movie, index) =>
                <li key={`${movie._id}-${index}`}
                    onClick={() => setSelectedId(movie._id)}
                    className={`${styles.carouselItem}`}
                >
                  <div className={styles.imageFrame}>
                    <img src={movie.thumbnail}
                        alt={movie.title}
                        className={styles.imageItem}
                    />
                  </div>
                </li>
              )
            )
          }
        </ul>
        <button
          onClick={scrollRight}
          className="hidden md:block text-4xl lg:text-6xl wrap-btn"
        >
          <IoIosArrowForward  />
        </button>
      </section>

      { selectedId && (
        <Model id={selectedId} onClose={() => setSelectedId(null)} />
      )}

    </div>
  )
}

export default MovieCarousel