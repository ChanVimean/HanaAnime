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
      console.error("INvalid MongoDB ID format: ", id)
      return null
    }

    const client = await clientPromise
    const db = client.db("sample_mflix")
    const objectId = new ObjectId(id)

    const movie = await db.collection("movies").findOne({ _id: objectId })

    if (!movie) return null

    return movie
  } catch (error) {
    console.error("Error fetching selected movies: ", error)
    return null
  }
}