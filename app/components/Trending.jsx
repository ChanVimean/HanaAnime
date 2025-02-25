"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import styles from "../styles/Trending.module.css"
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
    <div className={styles.TrendContainer}>
      <h1 className={styles.TrendHeader}>{title}</h1>
      <section className={styles.TrendWrapper}>
        <ul ref={carouselRef} className={styles.TrendTrack}>
          { loading ?
            Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className={styles.TrendItem}>
                  <div className={styles.TrendFrame}>
                    <Skeleton className="w-full h-full bg-[var(--theme-700)]" />
                  </div>
                </li>
              )
            ) : (
              duplicatedMovies.map((movie, index) =>
                <li key={`${movie._id}-${index}`} className={styles.TrendItem}>
                  <div className={styles.TrendFrame}>
                    <img src={movie.cover}
                        alt={movie.title}
                        className={styles.TrendImage}
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