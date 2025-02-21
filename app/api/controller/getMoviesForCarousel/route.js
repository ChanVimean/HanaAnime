import clientPromise from "../../utils/mongo"

export const getMovies = async () => {
  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")

    const movies = await db.collection("movies").find({}, {
      projection: {
        title: 1,
        type: 1,
        rating: 1,
        cover: 1,
        thumbnail: 1,
        video: 1,
        genre: 1,
        release: 1
      }
    }).toArray()

    return movies
  } catch (error) {
    console.error("Error fetching movies: ", error)
    return { error: "Failed to fetch movies" }
  }
}