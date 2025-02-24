import { getOneMovie } from "@/app/api/controller/getModel/route"
import { NextResponse } from "next/server"


export const GET = async (req, context) => {
  try {
    const params = await context.params

    if (!params) return NextResponse.json({ error: "Params object is missing" }, { status: 400 })

    const { id } = params

    if (!id) return NextResponse.json({ error: "Missing movie ID" }, { status: 400 })

    const movie = await getOneMovie(id);

    if (!movie) return NextResponse.json({ error: "Movie not found" }, { status: 404 })

    return NextResponse.json(movie, { status: 200 })
  } catch (error) {
    console.error("Error in API Route:", error)
    return NextResponse.json({ error: "Failed to fetch selected Movie" }, { status: 500 })
  }
}