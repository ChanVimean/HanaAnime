"use client"

import { useState, useEffect } from "react"
import styles from "../styles/Carousel.module.css"
import { getAllMovies } from "../utils/FetchAPI"
import FilterItems from "../utils/FilterItems"

const Trending = ({ title, filterKey, filterValue }) => {

  const [filterMovies, setFilterMovies] = useState([])
  const duplicatedMovies = [...filterMovies, ...filterMovies]

  // ✅ Fetch movies on mount & when filter changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies()

        const filtered = FilterItems(data, { [filterKey]: filterValue })
        setFilterMovies(filtered)

      } catch (error) {
        console.error("Error fetching movies: ", error)
      }
    }

    fetchMovies()
  }, [filterKey, filterValue])


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
