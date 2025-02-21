"use client"

import { useMemo } from "react"
import styles from "../styles/Carousel.module.css"
import FilterItems from "../utils/FilterItems"


const Trending = ({ title, data, filterKey, filterValue }) => {
  
  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []

    const filtered = FilterItems(data, { [filterKey]: filterValue })

    return filtered
  }, [data, filterKey, filterValue])

  if (!filterMovies.length) return <p>Loading or No Data Found...</p>
  
  const duplicatedMovies = [...filterMovies, ...filterMovies]

  return (
    <div className="text-[var(--theme-50)] py-5 md:p-5 space-y-4">
      <h1 className="text-3xl font-semibold ps-4">{title}</h1>
      <section className={styles.carouselWrapper}>
        <ul className={styles.carouselTrack}>
          {
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
          }
        </ul>
      </section>
    </div>
  )
}

export default Trending
