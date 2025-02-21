"use client"

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io"

import { useMemo, useRef } from "react"
import styles from "../styles/Carousel.module.css"
import FilterItems from "../utils/FilterItems"


const MovieCarousel = ({ title, data, filterKey, filterValue }) => {

  const carouselRef = useRef(null)

  const filterMovies = useMemo(() => {
    if (!data || data.length === 0) return []

    const filtered = FilterItems(data, { [filterKey]: filterValue })

    return filtered
  }, [data, filterKey, filterValue])

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
        <ul ref={carouselRef}
            className={`${styles.carouselContainer} scrollbar-hide`}
        >
          {
            filterMovies.map(movie =>
              <li key={movie._id}
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
          }
        </ul>
        <button
          onClick={scrollRight}
          className="hidden md:block text-4xl lg:text-6xl wrap-btn"
        >
          <IoIosArrowForward  />
        </button>
      </section>

    </div>
  )
}

export default MovieCarousel