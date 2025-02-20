import { NextResponse } from "next/server"
import clientPromise from "../../utils/mongo"

export const getAllMovies = async () => {
  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")
    const movies = await db.collection("movies").find().toArray()

    return NextResponse.json(movies, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 })
  }
}