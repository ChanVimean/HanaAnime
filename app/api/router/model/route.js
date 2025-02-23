import { NextResponse } from "next/server"
import { getOneMovie } from "../../controller/getMovies/route"

const GET = async () => {
  try {
    const movie = await getOneMovie()

    if (movie.error) return NextResponse.json(
      { error: movie.error },
      { status: 500 }
    )

    return NextResponse.json(movie, { status: 200 })
  } catch (error) {
    console.error("Error in API Route: ", error)
    return NextResponse.json({ error: "Failed to fetch selected Movie" }, { status: 500 })
  }
}

export default GET