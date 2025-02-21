
import { NextResponse } from "next/server"
import { getMoviesForCarousel } from "../../controller/getMoviesForCarousel/route"

export const GET = async () => {
  try {
    const movies = await getMoviesForCarousel()

    if (movies.error) return NextResponse.json(
      { error: movies.error },
      { status: 500 }
    )

    return NextResponse.json(movies, { status: 200 })
  } catch (error) {
    console.error("Error in API route: ", error)
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500})
  }
}