"use client"

import MovieCarousel from "./components/MovieCarousel"
import Trending from "./components/Trending"

const Home = () => {



  return (
    <>
      <main className="bg-[var(--theme-950)]">
        <Trending title="Trending" filterKey="rating" filterValue={{ min: 7, max: 10 }} />
        <MovieCarousel title="New Releases" filterKey="release" filterValue={{ min: 2022, max: 2025 }} />
        <MovieCarousel title="Top Anime" filterKey="type" filterValue={["Anime"]} />
        <MovieCarousel title="Top Donghua" filterKey="type" filterValue={["Donghua"]} />
        <MovieCarousel title="Top Animation" filterKey="type" filterValue={["Animation"]} />
        <MovieCarousel title="Action" filterKey="genre" filterValue={["Action"]} />
        <MovieCarousel title="Drama & Romance" filterKey="genre" filterValue={["Drama", "Romance"]} />
        <MovieCarousel title="Martial Arts" filterKey="genre" filterValue={["Martial Arts"]} />
        <MovieCarousel title="Adventure" filterKey="genre" filterValue={["Adventure"]} />
        <MovieCarousel title="Fantasy" filterKey="genre" filterValue={["Fantasy"]} />
        <MovieCarousel title="Comedy" filterKey="genre" filterValue={["Comedy"]} />
        <MovieCarousel title="Sci-Fi & Supernatural" filterKey="genre" filterValue={["Sci-Fi", "Supernatural"]} />
      </main>
    </>
  )
}
 
export default Home