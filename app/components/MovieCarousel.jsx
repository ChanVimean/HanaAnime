"use client"

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io"

import { useState, useEffect, useRef } from "react"
import { getAllMovies } from "../utils/FetchAPI"
import FilterItems from "../utils/FilterItems"
import styles from "../styles/Carousel.module.css"

const MovieCarousel = ({ title, filterKey, filterValue }) => {

  const [filterMovies, setFilterMovies] = useState([])
  const carouselRef = useRef(null)

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