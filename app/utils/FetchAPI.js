import axios from "axios"

const API = axios.create({
  baseURL: "/api/router",
  headers: { "Content-Type": "application/json" }
})

export const MoviesForCarousel = async () => {
  try {
    const res = await API.get('/movies')
    return res.data
  } catch (error) {
    console.error("Failed to fetch movies: ", error)
    return { error: "Failed to fetch movies" }
  }
}