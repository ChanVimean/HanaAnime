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

export const FetchSelectedId = async (id) => {
  try {
    const res = await API.get(`/model/${id}`)
    console.log("API Response, ", res.data)

    if (res.data.error) {
      console.error(`Movie not found for ID [${id}]`, res.data.error)
      return null
    }

    return res.data
  } catch (error) {
    console.error(`Failed to fetch selected with ID [${id}]: `, error)
    return { error: "Failed to fetch movie details"}
  }
}