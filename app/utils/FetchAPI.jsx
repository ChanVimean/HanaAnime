import axios from "axios"

const API = axios.create({
  baseURL: "/api/router",
  headers: { "Content-Type": "application/json", }
})

export const getAllMovies = async () => {
  try {
    const res = await API.get('/movies')
    return res.data
  } catch (error) {
    console.error("Failed to fetch movies: ", error)
  }
}