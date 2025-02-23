"use client"

import Trending from "./components/Trending"
import { useState, useEffect } from "react"
import MovieCarousel from "./components/MovieCarousel"
import Hero from "./components/Hero"
import Model from "./components/Model"
import { MoviesForCarousel } from "./utils/FetchAPI"


const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const data = await MoviesForCarousel()
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
        <Model />
        <Hero data={movies} Key={"rating"} Value={{ min: 8, max: 10 }} />
        <Trending title="Trending" data={movies} Key="rating" Value={{ min: 7, max: 10 }} />
        <MovieCarousel title="New Releases" data={movies} Key="release" Value={{ min: 2022, max: 2025 }} />
        <MovieCarousel title="Top Anime" data={movies} Key="type" Value={["Anime"]} />
        <MovieCarousel title="Top Donghua" data={movies} Key="type" Value={["Donghua"]} />
        <MovieCarousel title="Top Animation" data={movies} Key="type" Value={["Animation"]} />
        <MovieCarousel title="Action" data={movies} Key="genre" Value={["Action"]} />
        <MovieCarousel title="Drama & Romance" data={movies} Key="genre" Value={["Drama", "Romance"]} />
        <MovieCarousel title="Martial Arts" data={movies} Key="genre" Value={["Martial Arts"]} />
        <MovieCarousel title="Adventure" data={movies} Key="genre" Value={["Adventure"]} />
        <MovieCarousel title="Fantasy" data={movies} Key="genre" Value={["Fantasy"]} />
        <MovieCarousel title="Comedy" data={movies} Key="genre" Value={["Comedy"]} />
        <MovieCarousel title="Sci-Fi & Supernatural" data={movies} Key="genre" Value={["Sci-Fi", "Supernatural"]} />
      </main>
    </>
  )
}
 
export default Home