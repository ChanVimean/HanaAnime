import clientPromise from "../../utils/mongo"

// Get only neccessary properties
export const getMovies = async () => {
  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")

    const movies = await db.collection("movies").find({}, {
      projection: {
        title: 1,
        type: 1,
        rating: 1,
        description: 1,
        duration: 1,
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

// Get all for Model
export const getOneMovie = async () => {
  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")

    const movie = await db.collection("movies").find().toArray()

    return movie
  } catch (error) {
    console.error("Error fetching selected movies: ", error)
    return { error: "Failed to fetch selected movies" }
  }
}