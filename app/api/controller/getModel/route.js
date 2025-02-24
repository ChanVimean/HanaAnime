import { ObjectId } from "mongodb"
import clientPromise from "../../utils/mongo"

export const getOneMovie = async (id) => {
  try {
    if (!id || typeof id !== "string") {
      console.error("Invalid ID: ID is missing or not a string:", id)
      return null
    }

    id = id.trim()

    if (!ObjectId.isValid(id)) {
      console.error("Invalid MongoDB ID format: ", id)
      return null
    }

    const client = await clientPromise
    const db = client.db("sample_mflix")

    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) })

    if (!movie) return null

    return movie
  } catch (error) {
    console.error("Error fetching selected movies: ", error)
    return null
  }
}