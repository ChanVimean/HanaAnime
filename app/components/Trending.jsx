"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import styles from "../styles/Carousel.module.css"
import FilterItems from "../utils/FilterItems"


const Trending = ({ title, data, Key, Value }) => {

  const [loading, setLoading] = useState(true)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (data && data.length > 0) setTimeout(() => setLoading(false), 1000)
  }, [data])
  
  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []

    const filtered = FilterItems(data, { [Key]: Value })

    return filtered
  }, [data, Key, Value])
  
  const duplicatedMovies = [...filterMovies, ...filterMovies]

  return (
    <div className="text-[var(--theme-50)] py-5 md:p-5 space-y-4">
      <h1 className="text-3xl font-semibold ps-4">{title}</h1>
      <section className={styles.carouselWrapper}>
        <ul ref={carouselRef} className={styles.carouselTrack}>
          { loading ?
            Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className={styles.coverItem}>
                  <div className={styles.coverFrame}>
                    <Skeleton className="w-full h-full bg-[var(--theme-700)]" />
                  </div>
                </li>
              )
            ) : (
              duplicatedMovies.map((movie, index) =>
                <li key={`${movie._id}-${index}`} className={styles.coverItem}>
                  <div className={styles.coverFrame}>
                    <img src={movie.cover}
                        alt={movie.title}
                        className={styles.coverImage}
                    />
                  </div>
                </li>
              )
            )
          }
        </ul>
      </section>
    </div>
  )
}

export default Trending