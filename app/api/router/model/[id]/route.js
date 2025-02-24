import { getOneMovie } from "@/app/api/controller/getModel/route"
import { NextResponse } from "next/server"


export const GET = async (req, { params }) => {
  try {
    const id = params?.id

    if (!id || Array.isArray(id)) {
      console.error("Invalid or missing ID: ", id)
      return NextResponse.json({ error: "Missing movie ID" }, { status: 400 })
    }

    const movie = await getOneMovie(id)

    if (!movie) return NextResponse.json({ error: "Movie not found" }, { status: 404 })

    return NextResponse.json(movie, { status: 200 })
  } catch (error) {
    console.error("Error in API Route: ", error)
    return NextResponse.json({ error: "Failed to fetch selected Movie" }, { status: 500 })
  }
}