"use client"

import MovieCarousel from "./components/MovieCarousel"
import Trending from "./components/Trending"
import { useState, useEffect } from "react"

const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const data = await MovieCarousel()
        setMovies(data)
      }
      fetchMovies()
    } catch (error) {
      console.error("Error fetching movies: ", error)
    }
  }, [])

  return (
    <>
      <main className="bg-[var(--theme-950)]">
        <Trending title="Trending" data={movies} filterKey="rating" filterValue={{ min: 7, max: 10 }} />
        <MovieCarousel title="New Releases" data={movies} filterKey="release" filterValue={{ min: 2022, max: 2025 }} />
        <MovieCarousel title="Top Anime" data={movies} filterKey="type" filterValue={["Anime"]} />
        <MovieCarousel title="Top Donghua" data={movies} filterKey="type" filterValue={["Donghua"]} />
        <MovieCarousel title="Top Animation" data={movies} filterKey="type" filterValue={["Animation"]} />
        <MovieCarousel title="Action" data={movies} filterKey="genre" filterValue={["Action"]} />
        <MovieCarousel title="Drama & Romance" data={movies} filterKey="genre" filterValue={["Drama", "Romance"]} />
        <MovieCarousel title="Martial Arts" data={movies} filterKey="genre" filterValue={["Martial Arts"]} />
        <MovieCarousel title="Adventure" data={movies} filterKey="genre" filterValue={["Adventure"]} />
        <MovieCarousel title="Fantasy" data={movies} filterKey="genre" filterValue={["Fantasy"]} />
        <MovieCarousel title="Comedy" data={movies} filterKey="genre" filterValue={["Comedy"]} />
        <MovieCarousel title="Sci-Fi & Supernatural" data={movies} filterKey="genre" filterValue={["Sci-Fi", "Supernatural"]} />
      </main>
    </>
  )
}
 
export default Home